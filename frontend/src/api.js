// import axios from 'axios';

// const Axios = axios.create({
//   baseURL: `${import.meta.env.BASE_URL}`,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // // Set the JWT token in the Authorization header for all requests
// // Axios.interceptors.request.use((config) => {
// //   const token = localStorage.getItem('token');
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return config;
// // });

// export function isUserAuth() {
//   return true;
// }

// export function getUserData() {
//   return {
//     name: 'Vad',
//     email: 'vad@fr.fr',
//     picture: '@/assets/images/IMG_20150915_153914.jpg',
//   };
// }

// export function getAllPosts() {
//   return Promise.resolve([
//     {
//       postId: 1,
//       text: 'text text text text 11',
//       name: 'Vad',
//       imageUrl: '@/assets/images/IMG_20150915_153914.jpg',
//       like: '',
//     },
//     {
//       postId: 2,
//       text: 'text text text text 22',
//       name: 'Bad',
//       imageUrl: '',
//       like: '',
//     },
//     {
//       postId: 3,
//       text: 'text text text text 33',
//       name: 'Oleks',
//       imageUrl: '',
//       like: '',
//     },
//   ]);
// }

// export default Axios;
