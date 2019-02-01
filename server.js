const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const { createBundleRenderer } = require('vue-server-renderer');

const html = fs.readFileSync('./dist/views/index.html', 'utf-8');
const serverBundle = path.join(__dirname, 'dist', 'vue-ssr-server-bundle.json');

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: true,
    template: html
});

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
    const context = { name: 'Hello World!' };

    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log('Server error');
            console.log(err);
            console.log(err.message);
            res.status(500).end('Internal Server Error');
            return;
        }
        res.end(html);
    });
});

app.listen(8081);

console.log('Running at Port 8081');
