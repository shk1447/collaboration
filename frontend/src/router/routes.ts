import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/chat',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/ChatPage.vue') }],
  },
  {
    path: '/map',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/MapPage.vue') }],
  },
  {
    path: '/manager',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/ManagerPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
