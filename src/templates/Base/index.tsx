import React from 'react';
import { useParams } from 'react-router-dom';
import { GiMeal } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  Container, Aside, Section, ButtonContainer,
} from './styles';

import { ButtonLink } from '../../components/ButtonLink';

interface BaseProps {
  children: any,
  meals: boolean,
  createmeal: boolean
}

export function Base({ children, meals = false, createmeal = false }: BaseProps) {
  const { id } = useParams();

  return (
    <Container>
      <Aside>
        <h1>NutriSoftware</h1>
        <ButtonContainer>
          <ButtonLink selected={meals} href={`/user/${id}`}>
            <GiMeal />
            Refeições
          </ButtonLink>
          <ButtonLink selected={createmeal} href={`/user/${id}`}>
            <AiOutlinePlus />
            Criar refeição
          </ButtonLink>
        </ButtonContainer>
        <small>Desenvolvido por Fernando Viana</small>
      </Aside>
      <Section>
        {children}
      </Section>
    </Container>
  );
}
