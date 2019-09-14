import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/index'
import Mine from '@/mine/index'
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/mine',
            name:'mine',
            component:Mine
        }
    ]
})