<template>
    <div class="admin-pages">
        <page-title
        icon="fa fa-cogs"
        main="Administração do Sistema"
        sub="Cadastro & Cia"
        />
     <div class="admin-pages-tabs">
        <b-card no-body>
         <b-tabs card>
         <b-tab title="Artigos" active>
         <article-admin />
         </b-tab>
          <b-tab title="Categorias">
            <category-admin/>
          </b-tab>
           <b-tab title="Usuários">
            <user-admin/>
           </b-tab>
         </b-tabs>
        </b-card>
     </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue';
import ArticleAdmin from './ArticleAdmin';
import CategoryAdmin   from './CategoryAdmin';
import UserAdmin from './UserAdmin'
export default {
    name:'AdminPages',
    components:{PageTitle,ArticleAdmin,CategoryAdmin,UserAdmin}

}
</script>

<style>

</style>
