<template>
    <div class="article-admin">
        <b-form>
            <input id="articles-id" type="hidden" v-model="articles.id">
            <b-row>
                <b-col xs="12">
                    <b-form-group label="Nome:" label-for="articles.name">
                        <b-form-input id="articles-name" type="text" required placeholder="Informe o nome do artigo...">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-form-group label="Descrição:" label-for="articles.description">
                        <b-form-input id="articles-description" type="text" required placeholder="Informe a descrição do artigo...">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-form-group label="Imagem (URL):" label-for="articles.imageUrl">
                        <b-form-input id="articles-imageUrl" type="text" required placeholder="Informe a URL do artigo...">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col xs="12">
                    <b-form-group label="Imagem (URL):" label-for="articles.imageUrl">
                        <b-form-select id="articles-parentId" :options="articles" v-model="articles.parentId">
                        </b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>



        </b-form>
    </div>
</template>

<script>
export default {
    name: 'ArticleAdmin',
    data: function() {
        return {
            mode: 'save',
            article: {},
            articles: [],
        }
    },

}
</script>

<style>

</style>