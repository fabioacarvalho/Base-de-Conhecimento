<template>
    <div class="article-admin">
        <b-form>
            <input id="articles-id" type="hidden" v-model="articles.id" >
            <b-row>
                <b-col xs="12">
                    <b-form-group label="Nome:" label-for="articles.name">
                        <b-form-input id="articles-name" type="text" v-model="article.name" required placeholder="Informe o nome do artigo..." :readonly="mode === 'remove'">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-form-group label="Descrição:" label-for="articles.description" >
                        <b-form-input id="articles-description" type="text" v-model="article.description" required placeholder="Informe a descrição do artigo..." :readonly="mode === 'remove'">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-form-group v-if="mode === 'save'" label="Imagem (URL):" label-for="articles.imageUrl">
                        <b-form-input id="articles-imageUrl" type="text" v-model="article.imageUrl" required placeholder="Informe a URL da imagem...">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col xs="12">
                    <b-form-group v-if="mode === 'save'" label="Categoria:" label-for="articles.categoryId">
                        <b-form-select id="articles-categoryId" :options="categories" v-model="article.categoryId">
                        </b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col xs="12">
                    <b-form-group v-if="mode === 'save'" label="Autor:" label-for="articles.userId">
                        <b-form-select id="articles-userId" :options="users" v-model="article.userId">
                        </b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col xs="12">
                    <b-form-group v-if="mode === 'save'" label="Conteúdo:" label-for="articles.content">
                        <VueEditor v-model="article.content" placeholder="informe o conteúdo do artigo..." />
                    </b-form-group>
                </b-col>
            </b-row>

            <hr>

            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>

        
        <b-table hover striped :items="articles" :fields="fields" class="mt-3">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" class="mr-2" @click="loadArticle(data.item)">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" class="mr-2" @click="loadArticle(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit">

        </b-pagination>

    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { baseApiUrl } from '@/global.js'
import axios from 'axios'
import { showError } from '../../global'

export default {
    name: 'ArticleAdmin',
    components: { VueEditor },
    data: function() {
        return {
            mode: 'save',
            article: {},
            articles: [],
            categories: [],
            users: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'description', label: 'Descrição', sortable: true },
                { key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods: {
        loadArticles() {
            const url = `${baseApiUrl}/articles?page=${this.page}`

            axios.get(url).then(res => {
                this.articles = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        },
        loadUsers() {
            const url = `${baseApiUrl}/users`

            axios.get(url).then(res => {
                //this.users = res.data
                this.users = res.data.map(user => {
                    return { ...user, value: user.id, text: user.email }
                })
            })
        },
        loadCategories() {
            const url = `${baseApiUrl}/categories`

            axios.get(url).then(res => {
                this.categories = res.data.map(category => {
                    return { ...category, value: category.id, text: category.path }
                })
            })
        },
        reset() {
            this.mode = 'save'
            this.article = {}
            this.loadArticles()
        },
        save() {
            const method = this.article.id ? 'put' : 'post'
            const id = this.article.id ? `/${this.article.id}` : ''

            axios[method](`${baseApiUrl}/articles${id}`, this.article)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove() {
            const id = this.article.id

            axios.delete(`${baseApiUrl}/articles/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        loadArticle(article, mode = 'save') {
            this.mode = mode
            axios.get(`${baseApiUrl}/articles/${article.id}`)
                .then(res => this.article = res.data)
        }
    },
    watch: {
        page() {
            this.loadArticles()
        }
    },
    mounted() {
        this.loadArticles()
        this.loadUsers()
        this.loadCategories()
    }

}
</script>

<style>

</style>