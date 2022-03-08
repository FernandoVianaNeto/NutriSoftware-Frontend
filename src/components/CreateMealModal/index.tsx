import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../Button';
import { Form } from '../Form';
import { InputForm } from '../InputForm';
import { SelectForm } from '../SelectForm';
import {
  Container, FormContainer, Group, BigGroup, ButtonContainer,
} from './styles';
import api from '../../api/api';
import urlConfig from '../../urlConfig.json';

type CreateMealTypes = {
  isCreating: boolean,
  id: string | undefined
}

export function CreateMealModal({ isCreating, id }: CreateMealTypes) {
  const [brazilianDate, setBrazilianDate] = useState('');
  const [date, setDate] = useState('');
  const [proteinfood, setProteinFood] = useState('-');
  const [carbohydratefood, setCarbohydrateFood] = useState('-');
  const [vegetablefood, setVegetableFood] = useState('-');
  const [meal, setMeal] = useState('');
  const [proteinamount, setProteinAmount] = useState('0');
  const [carbohydrateamount, setCarbohydrateAmount] = useState('0');
  const [vegetableamount, setVegetableAmount] = useState('0');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function handleCreateMeal() {
    api.post(`/createmeal/${id}`, {
      date: brazilianDate,
      proteinfood,
      carbohydratefood,
      vegetablefood,
      meal,
      proteinsamount: Number(proteinamount),
      carbohydratesamount: Number(carbohydrateamount),
      vegetablesamount: Number(vegetableamount),
    })
      .then(() => {
        window.location.href = `${urlConfig.frontendURL}/user/${id}`;
      });
  }

  useEffect(() => {
    if (brazilianDate !== '' && meal !== '') {
      if ((proteinfood !== '' && proteinamount !== '') || (vegetablefood !== '' && vegetableamount !== '') || (carbohydratefood !== '' && carbohydrateamount !== '')) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  }, [brazilianDate, proteinfood, carbohydratefood, vegetablefood,
    meal, proteinamount, carbohydrateamount, vegetableamount]);

  useEffect(() => {
    setBrazilianDate(date.split('-').reverse().join('/'));
  }, [date]);

  if (!isCreating) {
    return null;
  }

  return ReactDOM.createPortal(
    <Container>
      <FormContainer>
        <Form>
          <h1>Cadastrar refeição</h1>
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
                value={proteinamount}
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
                value={carbohydrateamount}
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
                value={vegetableamount}
                onChange={(event) => setVegetableAmount(event.target.value)}
              />
            </Group>
          </BigGroup>
        </Form>
        <ButtonContainer>
          <Button type="button" disabled={buttonDisabled} onClick={() => handleCreateMeal()}>Cadastrar refeição</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>,
    document.getElementById('meal-creator')!,
  );
}
