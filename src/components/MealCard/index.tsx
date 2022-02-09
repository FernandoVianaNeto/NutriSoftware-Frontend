import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Container } from './styles';

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
}

export function MealCard({
  vegetablesamount, proteinsamount, carbohydratesamount,
  carbohydratefood, proteinfood, vegetablefood, meal, date, id,
}: MealCardProps) {
  console.log(id);

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
              <button type="button" className="delete-button">
                {' '}
                <AiFillDelete />
              </button>
              <button type="button">
                <AiFillEdit />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
