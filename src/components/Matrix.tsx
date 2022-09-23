import React from 'react';
import { colorsOptions } from '../App';
import Cell from './Cell';
import { Row } from './Styled';

interface MatrixProps {
  cellsArrays?: string[][];
  matrix: string[][];
  colors: colorsOptions;
}

const Matrix = ({ cellsArrays, matrix, colors }: MatrixProps) => {
  return (
    <>
      {cellsArrays &&
        matrix.map((row, i) => (
          <Row key={i}>
            {row.map((cards, j) => (
              <Cell
                key={cards}
                cards={cards}
                color={colors[cellsArrays[i][j]]}
              />
            ))}
          </Row>
        ))}
    </>
  );
};

export default Matrix;
