import { useState } from 'react';
import api from '../api/api';

interface AuthProps {
  email: string,
  password: string,
}

interface RegisterProps {
  email: string,
  password: string,
  phone: string,
  name: string,
}

export function useAuth() {
  const [unAuth, setUnAuth] = useState(false);
  const [registedUser, setRegistedUser] = useState(false);

  async function handleLogin({ email, password }: AuthProps) {
    api.post('/auth', {
      email, password,
    })
      .then(async (response) => {
        setUnAuth(false);
        // const { user } = response.data;
        localStorage.setItem('token', JSON.stringify(response.data.token));
        // window.location.href = ""
      })
      .catch(() => {
        setUnAuth(true);
      });
  }

  function handleRegisterUser({
    email, phone, password, name,
  }: RegisterProps) {
    api.post('/createuser', {
      email, phone, password, name,
    })
      .then(async (response) => {
        setRegistedUser(false);
        console.log(response.data);
        // window.location.href = ""
      })
      .catch(() => {
        setRegistedUser(true);
      });
  }

  return {
    handleLogin, handleRegisterUser, unAuth, registedUser,
  };
}
