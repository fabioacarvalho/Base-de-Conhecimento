<template>

</template>

<script>
import { baseApiUrl } from '@/global.js'
import axios from 'axios'
import PageTitle from '../template/PageTitle.vue'

export default {
    name: 'ArticleById',
    components: { PageTitle },
    data: function() {
        return {
            article: {}
        }
    }
}
</script>

<style>

</style>