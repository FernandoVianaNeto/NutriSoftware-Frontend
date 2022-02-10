/* eslint-disable no-alert */
import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Container } from './styles';

import api from '../../api/api';
import urlConfig from '../../urlConfig.json';

interface MealCardProps {
  vegetablesamount: number,
  proteinsamount: number,
  carbohydratesamount: number,
  carbohydratefood: string,
  proteinfood: string,
  vegetablefood: string,
  meal: string,
  date: string,
  id: string,
  reference: string,
}

export function MealCard({
  vegetablesamount, proteinsamount, carbohydratesamount,
  carbohydratefood, proteinfood, vegetablefood, meal, date, id, reference,
}: MealCardProps) {
  function handleDeleteMeal() {
    if ((window.confirm('Are you sure you want to delete this meal?'))) {
      api.delete(`/deletemeal/${id}`)
        .then(() => {
          window.location.reload();
        });
    }
  }

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <td>{meal}</td>
            <td>{date}</td>
            <td>{proteinfood}</td>
            <td>
              {proteinsamount}
              g
            </td>
            <td>{carbohydratefood}</td>
            <td>
              {carbohydratesamount}
              g
            </td>
            <td>{vegetablefood}</td>
            <td>
              {vegetablesamount}
              g
            </td>
            <td className="options">
              <button type="button" className="delete-button" onClick={() => handleDeleteMeal()}>
                {' '}
                <AiFillDelete />
              </button>
              <a href={`${urlConfig.frontendURL}/user/editarrefeicao/${id}/${reference}`}>
                <AiFillEdit />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
