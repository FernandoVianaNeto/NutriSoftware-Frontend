import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import {
  Container, Aside, Section, InputContainer, FormContainer, SectionContent,
} from './styles';

import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

import { useAuth } from '../../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonRegisterDisabled, setButtonRegisterDisabled] = useState(true);

  const {
    handleLogin, unAuth, registedUser, handleRegisterUser,
  } = useAuth();

  useEffect(() => {
    if (isEmailValid(email) && password !== '') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);

  useEffect(() => {
    if (isEmailValid(registerEmail) && registerPassword !== '' && name !== '' && phone !== '' && confirmPassword !== '' && registerPassword === confirmPassword) {
      setButtonRegisterDisabled(false);
    } else {
      setButtonRegisterDisabled(true);
    }
  }, [registerEmail, registerPassword, name, phone, confirmPassword]);

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
          {
            unAuth && <small>Usuário e/ou senha inválidos</small>
          }
          <Button disabled={buttonDisabled} type="button" onClick={() => handleLogin({ email, password })}>
            Login
            <FiLogIn />
          </Button>
        </Form>
        <strong>Ou faça seu cadastro ao lado</strong>
      </Aside>
      <Section>
        <SectionContent>
          <FormContainer>
            <h1>
              Não é usuário?
              <br />
              Faça seu cadastro agora!
            </h1>
            <Form>
              <InputContainer>
                <MdDriveFileRenameOutline />
                <Input
                  placeholder="Nome"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <AiOutlineMail />
                <Input
                  placeholder="E-mail"
                  type="text"
                  value={registerEmail}
                  onChange={(event) => setRegisterEmail(event.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <AiOutlinePhone />
                <Input
                  placeholder="Telefone"
                  type="text"
                  value={phone}
                  onChange={(event) => setPhone(formatPhone(event.target.value))}
                />
              </InputContainer>
              <InputContainer>
                <RiLockPasswordFill />
                <Input
                  placeholder="Senha"
                  type="password"
                  value={registerPassword}
                  onChange={(event) => setRegisterPassword(event.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <RiLockPasswordFill />
                <Input
                  placeholder="Confirme a senha"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </InputContainer>
              {
                registedUser && <small>Usuário já cadastrado</small>
              }
              <Button
                type="button"
                disabled={buttonRegisterDisabled}
                onClick={() => handleRegisterUser({
                  email: registerEmail, password: registerPassword, phone, name,
                })}
              >
                Cadastrar
              </Button>
            </Form>
          </FormContainer>
        </SectionContent>
      </Section>
    </Container>
  );
}
