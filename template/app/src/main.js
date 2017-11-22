import Vue from "../../node_modules/vue/dist/vue";
import VueRouter from "../../node_modules/vue-router/dist/vue-router.js";
import Vuex from "../../node_modules/vuex/dist/vuex";
import index from "./component/index.vue";
import routes from "./route/route.js";
import stores from "./store/store";

const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", { value: bus });

// Vue Router
Vue.use(VueRouter);

const router = new VueRouter({
    // mode: "history",
    routes: routes
});

// Vuex
Vue.use(Vuex);
const store = new Vuex.Store(stores);

new Vue({
    el: "#app",
    template: "<index />",
    components: {index},
    store,
    router
});