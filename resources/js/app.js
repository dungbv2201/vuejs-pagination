require('./bootstrap');
import Vue from "vue";
import App from "./components/App"
import Router from "vue-router";
import Routes from './routes'

Vue.use(Router);
const router = new Router({
    routes: Routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
