import {createRouter, createWebHistory} from "vue-router";
import FirstPage from "@/components/FirstPage";

const routes = [

    {
        path: '/',
        component: FirstPage

    },


    {
        path: '/open-car',
        component: () => import('../components/CarPage.vue')

    }
    ,
    {
        path: '/open-history',
        component: function() {
           return import('../components/SavingInformation.vue');
        }

    }
    ,
    {
        path: '/open-product',
        component: () => import('../components/ProductPage.vue')

    }
    ,

    {
        path: '/next-page',
        component: () => import('../components/CarPage.vue')
    }
    ,
    {
        path: '/create-product',
        component: () => import('../components/CreateProduct.vue')
    }
    ,
    {
        path: '/open-category',
        component: () => import('../components/CategoryPage.vue')

    }


]


export default createRouter({
    history: createWebHistory(),
    routes,
})