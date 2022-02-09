import { useState } from 'react';
import api from '../api/api';
import urlConfig from '../urlConfig.json';

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
      .then(async (response: any) => {
        setUnAuth(false);
        const { user } = response.data;
        localStorage.setItem('token', JSON.stringify(response.data.token));
        window.location.href = `${urlConfig.frontendURL}/user/${user.id}`;
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
      .then(async (response: any) => {
        setRegistedUser(false);
        const { user } = response.data;
        window.location.href = `${urlConfig.frontendURL}/user/${user.id}`;
      })
      .catch(() => {
        setRegistedUser(true);
      });
  }

  return {
    handleLogin, handleRegisterUser, unAuth, registedUser,
  };
}
