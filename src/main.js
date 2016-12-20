import Vue from 'vue';
import VueRouter from 'vue-router';
import Jquery from 'jquery'
import Underscore from 'underscore';
import Backbone from 'backbone';
import store from './store';
import JqueryConfig from './config/jqueryConfig'

import Home from './pages/home.vue';
import LeftMenu from './pages/leftMenu.vue';
import RightBody from './pages/rightBody.vue';

window.$ = window.jQuery = Jquery;
window._ = Underscore;


Vue.use(VueRouter);
const Foo = {template: '<div>foo<router-view></router-view></div>'};
const Bar = {template: '<div>{{this.$route.params.key}}</div>'};
const routes = [
    {
        path: '/',
        component: Home,
        children: [{
            path: ':id',
            component: LeftMenu,
            children: [
                {
                    path: ':key',
                    component: RightBody
                }
            ]
        }]
    }
];

const router = new VueRouter({
    mode: 'history',//启用history模式
    routes // （缩写）相当于 routes: routes
});


const app = new Vue({
    store,
    router,
    el: '#app'
});