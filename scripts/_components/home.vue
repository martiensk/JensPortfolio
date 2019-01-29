<template>
    <div>
        <pre>{{selected.text}}</pre>
        <h1>I put symbols in the glow box.</h1>
        <br />
        <div>
            <border-button v-for="(item, id) in navLinks" :key="id" @click="navigate('/')" :isNavigating="isNavigating" :buttonText="item"></border-button>
        </div>
    </div>
</template>

<script>
    /**
     * The home page (/)
     * @namespace Components.Home
     * @author Martiens Kropff
     */

    import {mapGetters} from 'vuex';
    import {full, mid, small} from '../ascii';
    import Mixin from '../mixins';
    import BorderButton from './border-button';

    export default {
        name: 'Home',
        mixins: [Mixin],
        components: {BorderButton},
        props: {
            isNavigating: {
                type: Boolean,
                required: true
            }
        },
        data () {
            return {navLinks: ['About Me', 'The Lab', 'Tech Stack', 'Get In Touch']};
        },
        computed: {
            ...mapGetters([
                'media'
            ]),

            /**
             * Returns ASCII art based on the screen media.
             * @memberOf Components.Home
             * @author Martiens Kropff
             * @returns {void}
             */
            selected () {
                switch (this.media) {
                case 'mobile':
                    return small;
                case 'tablet':
                    return mid;
                default:
                    return full;
                }
            }
        }
    };
</script>

<style lang="scss">
    @import '../../styles/responsive.scss';
    @import '../../styles/colors.scss';

    :global {
        textarea {
            animation: text-shadow 1s infinite;
        }
    }

    div {
        div {
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }

    textarea {
        display: block;
        width: 130px;
        overflow: hidden;
        background: transparent;
        color: inherit;
        border: none;
        resize: none;
        user-select: none;
        cursor: default;
        pointer-events: none;
    }

    h1 {
        font-size: 16px;
        margin: 0;
    }

    @include tablet {
        textarea {
            width: 380px;
        }
    }

    p {
        padding: 0;
        margin: 0;
    }

</style>