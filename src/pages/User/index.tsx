import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillGearFill, BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import {
  Container, SectionContent, MealsContainer, Filters, FiltersButtonContainer,
} from './styles';

import { Base } from '../../templates/Base';

import api from '../../api/api';
import urlConfig from '../../urlConfig.json';

import { MealCard } from '../../components/MealCard';
import { Select } from '../../components/Select';

interface MealProps {
  vegetablesamount: number,
  proteinsamount: number,
  carbohydratesamount: number,
  carbohydratefood: string,
  proteinfood: string,
  vegetablefood: string,
  meal: string,
  date: string,
  id: string
}

export function User() {
  const [mealsData, setMealsData] = useState([]);
  const [recentMeals, setRecentMeals] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const [vegetablesFilter, setVegetablesFilter] = useState('');
  const [proteinsFilter, setProteinsFilter] = useState('');
  const [carbohydratesFilter, setCarbohydratesFilter] = useState('');
  const [mealFilter, setMealFilter] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const authToken: any = localStorage.getItem('token');

    if (!authToken) {
      window.location.href = `${urlConfig.frontendURL}/`;
    }

    api.defaults.headers.authorization = `Bearer ${JSON.parse(authToken)}`;

    api.get(`/meals/${id}`)
      .then(async (response: any) => {
        setMealsData(response.data);
      });
  }, []);

  useEffect(() => {
    if (vegetablesFilter === '' && proteinsFilter === '' && carbohydratesFilter === '') {
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
  }, [mealFilter, carbohydratesFilter, vegetablesFilter, proteinsFilter]);

  const filtered = useMemo(() => mealsData.filter((meal: MealProps) => (
    meal.carbohydratefood.toLowerCase().includes(carbohydratesFilter.toLowerCase())
    && meal.proteinfood.toLowerCase().includes(proteinsFilter.toLowerCase())
    && meal.vegetablefood.toLowerCase().includes(vegetablesFilter.toLowerCase())
    && meal.meal.toLowerCase().includes(mealFilter.toLowerCase())
  )), [carbohydratesFilter, proteinsFilter, vegetablesFilter, mealFilter]);

  return (
    <Container>
      <Base meals createmeal={false}>
        <SectionContent>
          <h1>Todas as Refeições</h1>
          <Filters>
            <FiltersButtonContainer>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Select
                        value={mealFilter}
                        onChange={(event) => setMealFilter(event.target.value)}
                      >
                        <option value="">Refeição</option>
                        <option value="café da manha">Café da manhã</option>
                        <option value="almoço">Almoço</option>
                        <option value="almoço">Janta</option>
                      </Select>
                    </td>
                    <td>
                      {
                        recentMeals ? <BsArrowUpShort className="icon" /> : <BsArrowDownShort className="icon" />
                      }
                      <button type="button" onClick={() => setRecentMeals(!recentMeals)}>
                        Data
                      </button>
                    </td>
                    <td>
                      <Select
                        value={proteinsFilter}
                        onChange={(event) => setProteinsFilter(event.target.value)}
                      >
                        <option value="">Proteína</option>
                        <option value="peixe">Peixe</option>
                        <option value="boi">Boi</option>
                        <option value="porco">Porco</option>
                        <option value="frango">Frango</option>
                        <option value="ovo">Ovo</option>
                      </Select>
                    </td>
                    <td><button type="button">Qntd.</button></td>
                    <td>
                      <Select
                        value={carbohydratesFilter}
                        onChange={(event) => setCarbohydratesFilter(event.target.value)}
                      >
                        <option value="">Carboidrato</option>
                        <option value="arroz">Arroz</option>
                        <option value="batata">Batata</option>
                        <option value="inhame">Inhame</option>
                        <option value="macarrão">Macarrão</option>
                        <option value="pão">Pão</option>
                      </Select>
                    </td>
                    <td><button type="button">Qntd.</button></td>
                    <td>
                      <Select
                        value={vegetablesFilter}
                        onChange={(event) => setVegetablesFilter(event.target.value)}
                      >
                        <option value="">Vegetais</option>
                        <option value="abobrinha">Abobrinha</option>
                        <option value="berinjela">Berinjela</option>
                        <option value="abobora">Abóbora</option>
                        <option value="almeirão">Almeirão</option>
                        <option value="tomate">Tomate</option>
                      </Select>
                    </td>
                    <td><button type="button">Qntd.</button></td>
                    <td className="options">
                      {' '}
                      <BsFillGearFill />
                    </td>
                  </tr>
                </tbody>
              </table>
            </FiltersButtonContainer>
          </Filters>
          <MealsContainer>
            {
              mealsData.length === 0 && (
              <strong className="no-meal">
                Cadastre uma nova refeição para mostrá-la aqui
                {' '}
                <a href={`${urlConfig.frontendURL}/criarrefeicao/${id}`}>
                  <AiOutlinePlus />
                  Criar refeição
                </a>
              </strong>
              )
            }
            {
              filtered.length === 0 && isFiltered === false
              && mealsData.map((meal: MealProps) => (
                <MealCard
                  vegetablesamount={meal.vegetablesamount}
                  carbohydratesamount={meal.carbohydratesamount}
                  proteinsamount={meal.proteinsamount}
                  proteinfood={meal.proteinfood}
                  carbohydratefood={meal.carbohydratefood}
                  vegetablefood={meal.vegetablefood}
                  date={meal.date}
                  key={meal.id}
                  id={meal.id}
                  meal={meal.meal}
                />
              ))
            }
            {
              filtered.map((meal: MealProps) => (
                <MealCard
                  vegetablesamount={meal.vegetablesamount}
                  carbohydratesamount={meal.carbohydratesamount}
                  proteinsamount={meal.proteinsamount}
                  proteinfood={meal.proteinfood}
                  carbohydratefood={meal.carbohydratefood}
                  vegetablefood={meal.vegetablefood}
                  date={meal.date}
                  key={meal.id}
                  id={meal.id}
                  meal={meal.meal}
                />
              ))
            }
            {
              isFiltered === true && filtered.length === 0
              && (
              <strong>
                Infelizmente não encontramos nada para você...
                {' '}
                <HiOutlineEmojiSad className="icon" />
              </strong>
              )
            }
          </MealsContainer>
        </SectionContent>
      </Base>
    </Container>
  );
}
