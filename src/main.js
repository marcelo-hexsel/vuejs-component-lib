import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"

import Home from "./visual-tests/Home"
import ComponentAVisualTests from "./visual-tests/ComponentAVisualTests"

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [{ path: "/", component: Home }, { path: "/componentA", component: ComponentAVisualTests }]

const router = new VueRouter({
	routes
})

new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
