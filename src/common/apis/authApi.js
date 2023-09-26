import axios  from 'axios';

import { authApi } from './movieApi'

export const signUp = async (formData) => {
    try {
      const { data } = await authApi.post("/signup",formData);
      console.log(data);
      return data;
      
    } catch (error) {
      console.log(error);
    }
  };

  export const LoginApi = async (formData) => {
    try {
        console.log("--------------");
      const { data } = await authApi.post("/login",formData);
      console.log(data,"data");
      return data;
      
    } catch (error) {
      console.log(error);
    }
  };