import Vue from 'vue'
import VueRouter from'vue-router'
import App from './App.vue'
import Goods from './components/goods/goods'
import Ratings from './components/ratings/ratings'
import Seller from './components/seller/seller'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'reset-css'

import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const routes = [
    { path: '/goods', component: Goods },
    { path: '/ratings', component: Ratings },
    { path: '/seller', component: Seller },
    { path: '/', redirect: '/goods' }
]

const router = new VueRouter({
    mode: 'hash',
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes
})

new Vue({
    el: '#app',
    router,  // 注入到根实例中
    render: h => h(App)
})
