<template>
    <div class="home">
        <page-title 
        icon="fa fa-home"
        main="Dasboard"
        sub="Base de Conhecimento"
        />
        <div class="stats">
            <stat 
            title="categorias" 
            :value="stat.categories" 
            icon="fa fa-folder"
            color="#d54d50"/>
            <stat title="Artigos" 
            :value="stat.articles"
             icon="fa fa-file" 
             color="#3bc480"/>
            <stat title="Usuários"
             :value="stat.users" 
             icon="fa fa-user" 
             color="#3282cd"/>

        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue';
import Stat from './Stat.vue';
import axios from 'axios';
import {baseApiUrl} from '@/global'
export default {
    name:'Home',
    components:{PageTitle,Stat},
    data(){
        return{
            stat:{}
        }
    },
    methods:{
        getStat(){
            axios.get(`${baseApiUrl}/stats`)
            .then(res => this.stat = res.data)
        }
    },
    mounted(){
       this.getStat()
    }

}
</script>

<style>
.stats{
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
