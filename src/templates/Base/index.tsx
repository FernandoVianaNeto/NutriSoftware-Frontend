import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { GiMeal } from 'react-icons/gi';

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
  const [showMenu, setShowMenu] = useState(false);

  const { id } = useParams();

  return (
    <Container>
      {
        showMenu ? (
          <button className="close-button" type="button" onClick={() => setShowMenu(false)}>
            <AiOutlineClose />
            {' '}
          </button>
        )
          : (
            <button className="show-button" type="button" onClick={() => setShowMenu(true)}>
              <AiOutlineMenu />
              {' '}
            </button>
          )
      }

      <Aside showMenu={showMenu}>
        <h1>NutriSoftware</h1>
        <ButtonContainer>
          <ButtonLink selected={meals} href={`/user/${id}`}>
            <GiMeal />
            Refeições
          </ButtonLink>
          <ButtonLink selected={createmeal} href={`/user/criarrefeicao/${id}`}>
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
