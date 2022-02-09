import React from 'react';
import { Base } from '../../templates/Base';
import { Container, SectionContent } from './styles';

export function CreateMeal() {
  return (
    <Container>
      <Base meals={false} createmeal>
        <SectionContent>
          container
        </SectionContent>
      </Base>
    </Container>
  );
}
