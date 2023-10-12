import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: function () {
            return import ('../components/FirstPage.vue')
        }
    },

    {
        path: '/open-car',
        component: function () {
            return import('../components/CarPage.vue')
        }
    },
    {
        path: '/open-history',
        component: function () {
            return import('../components/SavingInformation.vue')
        }
    },
    {
        path: '/open-product',
        component: function () {
            return import('../components/ProductPage.vue')
        }
    },
    {
        path: '/next-page',
        component: function () {
            return import('../components/CarPage.vue')
        }
    },
    {
        path: '/create-product',
        component: function () {
            return import('../components/CreateProduct.vue')
        }
    },
    {
        path: '/open-category',
        component: function () {
            return import('../components/CategoryPage.vue')
        }
    }


]


export default createRouter({
    history: createWebHistory(),
    routes,

})