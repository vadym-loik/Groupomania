import axios from '../axios';

export const signupUser = () => {
  return axios
    .post('/user', {
      name: '',
      email: '',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
