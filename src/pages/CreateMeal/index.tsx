import React from 'react';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { InputForm } from '../../components/InputForm';
import { SelectForm } from '../../components/SelectForm';
import { Base } from '../../templates/Base';
import {
  Container, SectionContent, FormContainer, Group, BigGroup, ButtonContainer,
} from './styles';

export function CreateMeal() {
  return (
    <Container>
      <Base meals={false} createmeal>
        <SectionContent>
          <h1>Criar refeição</h1>
          <FormContainer>
            <Form>
              <BigGroup>
                <Group>
                  <small>Data</small>
                  <InputForm
                    type="date"
                  />
                </Group>
                <Group>
                  <small>Refeição</small>
                  <SelectForm>
                    <option value="">Refeição</option>
                    <option value="cafe da manha">Café da manha</option>
                    <option value="almoco">Almoço</option>
                    <option value="janta">Janta</option>
                  </SelectForm>
                </Group>
              </BigGroup>
              <BigGroup>
                <Group>
                  <small>Proteína:</small>
                  <SelectForm>
                    <option value="">Proteína</option>
                    <option value="peixe">Peixe</option>
                    <option value="boi">Boi</option>
                    <option value="porco">Porco</option>
                    <option value="frango">Frango</option>
                    <option value="ovo">Ovo</option>
                  </SelectForm>
                </Group>
                <Group>
                  <small>Quantidade (g)</small>
                  <InputForm
                    placeholder="g"
                  />
                </Group>
              </BigGroup>
              <BigGroup>
                <Group>
                  <small>Carboidratos:</small>
                  <SelectForm>
                    <option value="">Carboidrato</option>
                    <option value="arroz">Arroz</option>
                    <option value="batata">Bata</option>
                    <option value="inhame">Inhame</option>
                    <option value="macarrao">Macarrão</option>
                    <option value="pao">Pão</option>
                  </SelectForm>
                </Group>
                <Group>
                  <small>Quantidade (g)</small>
                  <InputForm
                    placeholder="g"
                  />
                </Group>
              </BigGroup>
              <BigGroup>
                <Group>
                  <small>Vegetais:</small>
                  <SelectForm>
                    <option value="">Vegetal</option>
                    <option value="abobrinha">Abobrinha</option>
                    <option value="berinjela">Berinjela</option>
                    <option value="abobora">Abóbora</option>
                    <option value="almeirao">Almeirão</option>
                    <option value="tomate">Tomate</option>
                  </SelectForm>
                </Group>
                <Group>
                  <small>Quantidade (g)</small>
                  <InputForm
                    placeholder="g"
                  />
                </Group>
              </BigGroup>
            </Form>
            <ButtonContainer>
              <Button type="button">Cadastrar refeição</Button>
            </ButtonContainer>

          </FormContainer>
        </SectionContent>
      </Base>
    </Container>
  );
}
