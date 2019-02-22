<template>
    <v-card>
        <v-card-text>Jennie's blurb.</v-card-text>
    </v-card>
</template>

<script>
import { VCard, VCardText } from 'vuetify/lib';

export default {
    name: 'Project',
    components: { VCard, VCardText },
    props: {
        photoSet: {
            type: Array,
            required: true
        }
    }
};
</script>
