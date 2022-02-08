import React from 'react';
import {
  Container, Aside, Section, ButtonContainer,
} from './styles';

import { ButtonLink } from '../../components/ButtonLink';

export function Base({ children }: any) {
  return (
    <Container>
      <Aside>
        <ButtonContainer>
          <ButtonLink>Refeições</ButtonLink>
        </ButtonContainer>
      </Aside>
      <Section>
        {children}
      </Section>
    </Container>
  );
}
