import { createRouter, createWebHistory } from 'vue-router';

import Login from '../pages/Login.vue';
import Registration from '../pages/Registration.vue';
import HomePage from '../pages/HomePage.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// import { useAuthStore, useAlertStore } from '../stores';
// import HomePage from '../pages/HomePage.vue';
// import Login from '../pages/Login.vue';
// import Registration from '../pages/Registration.vue';

// export const router = createRouter({
//   history: createWebHistory(),
//   linkActiveClass: 'active',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomePage,
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: Login,
//     },
//     {
//       path: '/registration',
//       name: 'registration',
//       component: Registration,
//     },

//     // catch all redirect to home page
//     { path: '/:pathMatch(.*)*', redirect: '/' },
//   ],
// });

// router.beforeEach(async (to) => {
//   // clear alert on route change
//   const alertStore = useAlertStore();
//   alertStore.clear();

//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/registration'];
//   const authRequired = !publicPages.includes(to.path);
//   const authStore = useAuthStore();

//   if (authRequired && !authStore.user) {
//     authStore.returnUrl = to.fullPath;
//     return '/login';
//   }
// });
