import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import {
  Container, SectionContent, MealsContainer, Filters, FiltersButtonContainer,
} from './styles';

import { Base } from '../../templates/Base';

import api from '../../api/api';
import urlConfig from '../../urlConfig.json';

import { MealCard } from '../../components/MealCard';

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
                    <td><button type="button">Refeição</button></td>
                    <td><button type="button">Data</button></td>
                    <td><button type="button">Proteína</button></td>
                    <td><button type="button">Qntd.</button></td>
                    <td><button type="button">Carboidrato</button></td>
                    <td><button type="button">Qntd.</button></td>
                    <td><button type="button">Vegetais</button></td>
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
