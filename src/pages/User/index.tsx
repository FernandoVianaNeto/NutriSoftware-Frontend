import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillGearFill, BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
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
    // .catch(() => {
    //   window.location.href = `${urlConfig.frontendURL}/`;
    // });
  }, []);

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
                      <Select>
                        <option value="">Refeição</option>
                        <option value="">Café da manhã</option>
                        <option value="">Almoço</option>
                        <option value="">Janta</option>
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
                      <Select>
                        <option value="">Proteína</option>
                        <option value="">Peixe</option>
                        <option value="">Boi</option>
                        <option value="">Porco</option>
                        <option value="">Frango</option>
                        <option value="">Ovo</option>
                      </Select>
                    </td>
                    <td><button type="button">Qntd.</button></td>
                    <td>
                      <Select>
                        <option value="">Carboidrato</option>
                        <option value="">Arroz</option>
                        <option value="">Batata</option>
                        <option value="">Inhame</option>
                        <option value="">Macarrão</option>
                        <option value="">Pão</option>
                      </Select>
                    </td>
                    <td><button type="button">Qntd.</button></td>
                    <td>
                      <Select>
                        <option value="">Vegetais</option>
                        <option value="">Abobrinha</option>
                        <option value="">Berinjela</option>
                        <option value="">Abóbora</option>
                        <option value="">Almeirão</option>
                        <option value="">Tomate</option>
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
              mealsData.map((meal: MealProps) => (
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
          </MealsContainer>
        </SectionContent>
      </Base>
    </Container>
  );
}
