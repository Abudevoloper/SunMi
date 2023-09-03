import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: function () {
            return import ('../components/FirstPage.vue')
        }
    },
    {
        path: '/exit',
        component: function () {
            return import('../components/FirstPage.vue')
        }
    },
    {
        path: '/open-car',
        component: function  (){
           return import('../components/CarPage.vue')
        }
    },
    {
        path: '/open-history',
        component: function () {
           return   import('../components/SavingInformation.vue')
        }
    }


]


export default createRouter({
    history: createWebHistory(),
    routes,

})