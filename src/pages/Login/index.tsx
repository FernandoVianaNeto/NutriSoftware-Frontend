import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';
import {
  Container, Aside, Section, InputContainer,
} from './styles';

import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import isEmailValid from '../../utils/isEmailValid';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (isEmailValid(email) && password !== '') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);

  return (
    <Container>
      <Aside>
        <h1>Faça login na sua conta</h1>
        <Form>
          <InputContainer>
            <AiOutlineMail />
            <Input
              placeholder="E-mail"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <RiLockPasswordFill />
            <Input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputContainer>
          <Button disabled={buttonDisabled} type="button">

            Login
            <FiLogIn />
          </Button>
        </Form>
        <strong>Ou faça seu cadastro ao lado</strong>
      </Aside>
      <Section>
        <h1>Section</h1>
      </Section>
    </Container>
  );
}
