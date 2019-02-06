const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const { createBundleRenderer } = require('vue-server-renderer');

const html = fs.readFileSync('./dist/views/index.html', 'utf-8');
const serverBundle = path.join(__dirname, 'dist', 'vue-ssr-server-bundle.json');

const getDirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
const photos = {};

for (const dir of getDirs(path.join(__dirname, 'photos'))) {
    photos[dir] = fs.readdirSync(path.join(__dirname, 'photos', dir));
}

console.log(photos);

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: true,
    template: html
});

app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(path.join(__dirname, '/photos')));

app.use(require('connect-inject')({
    snippet: `<script>const photos = ${JSON.stringify(photos)};</script>`,
    ignore: ['.js', '.svg']
}));

app.get('*', (req, res) => {
    const context = { name: 'Hello World!' };

    renderer.renderToString(context).then((page) => {
        res.end(page);
    }).catch((err) => {
        if (err) {
            console.error('Server error');
            console.error(err);
            console.error(err.message);
            res.status(500).end('Internal Server Error');
        }
    });
});

app.listen(8081);

console.log('Running at Port 8081');
