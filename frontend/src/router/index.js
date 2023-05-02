import { createRouter, createWebHistory } from 'vue-router';

import Login from '../pages/Login.vue';
import Registration from '../pages/Registration.vue';
import HomePage from '../pages/HomePage.vue';
import ProfilePage from '../pages/ProfilePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
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
    path: '/profile',
    name: 'profile-page',
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     return '/login';
//   }
// });

export default router;
