import Vue from 'vue'
import VueRouter from 'vue-router';
// import App from '../App.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'

Vue.use(VueRouter)

// const Login = { template: '<div>Login Page</div>' }
// const NotFound = { template: '<div>Page not found</div>' }

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board },
    { path: '/*', component: NotFound }
  ] 
})

export default router