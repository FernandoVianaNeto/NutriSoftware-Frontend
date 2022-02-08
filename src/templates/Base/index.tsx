import React from 'react';
import {
  Container, Aside, Section, ButtonContainer,
} from './styles';

import { ButtonLink } from '../../components/ButtonLink';

// type BaseProps = {
//   // eslint-disable-next-line react/require-default-props
//   children?: any
// }

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
