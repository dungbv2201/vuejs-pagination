require('./bootstrap');
import Vue from "vue";
import ExampleComponent from "./components/ExampleComponent"


const app = new Vue({
    el: '#app',
    render:h=>h(ExampleComponent)
});
