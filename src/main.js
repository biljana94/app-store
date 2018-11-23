import Vue from 'vue'
import App from './App.vue'

import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import VueRouter from 'vue-router'; //importujemo vue-router koji smo instalirali u projektu 'npm install vue-router'



Vue.config.productionTip = false;

Vue.use(VueRouter); //ovde koristimo VueRouter


const routes = [
  {path: '/', redirect: '/products'},
  {path: '/products', component: AppProducts}, //putanje - rute
  {path: '/customers', component: AppCustomers}
];


//instanciranje VueRouter i smestila rute u 'routes'
const router = new VueRouter({
  routes
});




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
