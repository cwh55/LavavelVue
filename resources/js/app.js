
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

import Hello from './components/Hello.vue'; // 引入Hello 组件

import ElementUI from 'element-ui';
import 'element-ui/packages/theme-chalk/lib/index.css';

Vue.use(ElementUI);

const app = new Vue({
    el: '#app', render: h => h(Hello)
});
