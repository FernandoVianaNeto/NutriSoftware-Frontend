import React from 'react';
import { Container } from './styles';

import { Base } from '../../templates/Base';

export function User() {
  return (
    <Container>
      <Base meals createmeal={false}>
        <h1>Fernando</h1>
      </Base>
    </Container>
  );
}
