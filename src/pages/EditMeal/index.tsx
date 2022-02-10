import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Base } from '../../templates/Base';
import {
  Container, SectionContent, BigGroup, Group, FormContainer, ButtonContainer,
} from './styles';

import { Form } from '../../components/Form';
import { InputForm } from '../../components/InputForm';
import { SelectForm } from '../../components/SelectForm';
import { Button } from '../../components/Button';

import api from '../../api/api';
import urlConfig from '../../urlConfig.json';

export function EditMeal() {
  const [date, setDate] = useState('');
  const [proteinfood, setProteinFood] = useState('-');
  const [carbohydratefood, setCarbohydrateFood] = useState('-');
  const [vegetablefood, setVegetableFood] = useState('-');
  const [meal, setMeal] = useState('');
  const [proteinamount, setProteinAmount] = useState('');
  const [carbohydrateamount, setCarbohydrateAmount] = useState('');
  const [vegetableamount, setVegetableAmount] = useState('');

  const { id, refeicaoid } = useParams();

  useEffect(() => {
    const authToken: any = localStorage.getItem('token');

    if (!authToken) {
      window.location.href = `${urlConfig.frontendURL}/`;
    }

    api.defaults.headers.authorization = `Bearer ${JSON.parse(authToken)}`;

    api.get(`/meals/${id}/${refeicaoid}`)
      .then(async (response: any) => {
        setMeal(response.data.meal);
        setProteinFood(response.data.proteinfood);
        setVegetableFood(response.data.vegetablefood);
        setCarbohydrateFood(response.data.carbohydratefood);
        setCarbohydrateAmount(response.data.carbohydratesamount);
        setVegetableAmount(response.data.vegetablesamount);
        setProteinAmount(response.data.proteinsamount);
        setDate(response.data.date);
      });
  }, []);

  function handleEditMeal() {
    if (proteinamount === '') {
      setProteinAmount('0');
    }

    if (vegetableamount === '') {
      setVegetableAmount('0');
    }

    if (carbohydrateamount === '') {
      setCarbohydrateAmount('0');
    }

    api.post(`/updatemeal/${id}/${refeicaoid}`, {
      meal,
      date,
      vegetablefood,
      proteinfood,
      carbohydratefood,
      proteinsamount: proteinamount,
      carbohydratesamount: carbohydrateamount,
      vegetablesamount: vegetableamount,
    })
      .then(() => {
        window.location.href = `${urlConfig.frontendURL}/user/${id}`;
      });
  }

  return (
    <Container>
      <Base meals={false} createmeal={false}>
        <SectionContent>
          <h1>Editar refeição</h1>
          <FormContainer>
            <Form>
              <BigGroup>
                <Group>
                  <small>Data</small>
                  <InputForm
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </Group>
                <Group>
                  <small>Refeição</small>
                  <SelectForm
                    value={meal}
                    onChange={(event) => setMeal(event.target.value)}
                  >
                    <option value="">Refeição</option>
                    <option value="Café da manhã">Café da manha</option>
                    <option value="Almoço">Almoço</option>
                    <option value="Janta">Janta</option>
                  </SelectForm>
                </Group>
              </BigGroup>
              <BigGroup>
                <Group>
                  <small>Proteína:</small>
                  <SelectForm
                    value={proteinfood}
                    onChange={(event) => setProteinFood(event.target.value)}
                  >
                    <option value="">Proteína</option>
                    <option value="Peixe">Peixe</option>
                    <option value="Boi">Boi</option>
                    <option value="Porco">Porco</option>
                    <option value="Frango">Frango</option>
                    <option value="Ovo">Ovo</option>
                  </SelectForm>
                </Group>
                <Group>
                  <small>Quantidade (g)</small>
                  <InputForm
                    placeholder="g"
                    type="number"
                    defaultValue={proteinamount}
                    onChange={(event) => setProteinAmount(event.target.value)}
                  />
                </Group>
              </BigGroup>
              <BigGroup>
                <Group>
                  <small>Carboidratos:</small>
                  <SelectForm
                    value={carbohydratefood}
                    onChange={(event) => setCarbohydrateFood(event.target.value)}
                  >
                    <option value="">Carboidrato</option>
                    <option value="Arroz">Arroz</option>
                    <option value="Batata">Batata</option>
                    <option value="Inhame">Inhame</option>
                    <option value="Macarrão">Macarrão</option>
                    <option value="Pão">Pão</option>
                  </SelectForm>
                </Group>
                <Group>
                  <small>Quantidade (g)</small>
                  <InputForm
                    placeholder="g"
                    type="number"
                    defaultValue={carbohydrateamount}
                    onChange={(event) => setCarbohydrateAmount(event.target.value)}
                  />
                </Group>
              </BigGroup>
              <BigGroup>
                <Group>
                  <small>Vegetais:</small>
                  <SelectForm
                    value={vegetablefood}
                    onChange={(event) => setVegetableFood(event.target.value)}
                  >
                    <option value="">Vegetal</option>
                    <option value="Abobrinha">Abobrinha</option>
                    <option value="Berinjela">Berinjela</option>
                    <option value="Abóbora">Abóbora</option>
                    <option value="Almeirão">Almeirão</option>
                    <option value="Tomate">Tomate</option>
                  </SelectForm>
                </Group>
                <Group>
                  <small>Quantidade (g)</small>
                  <InputForm
                    placeholder="g"
                    type="number"
                    defaultValue={vegetableamount}
                    onChange={(event) => setVegetableAmount(event.target.value)}
                  />
                </Group>
              </BigGroup>
            </Form>
            <ButtonContainer>
              <Button type="button" onClick={() => handleEditMeal()}>Editar refeição</Button>
            </ButtonContainer>
          </FormContainer>
        </SectionContent>
      </Base>
    </Container>
  );
}
