import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import Dashboard from '../views/home/dashboard.vue';
import PageNotFound from '../views/pagenotfound.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: PageNotFound,
  },
  {
    path: '/home',
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
