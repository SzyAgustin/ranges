import Cell from './components/Cell';
import {
  ButtonsBox,
  Flex,
  MatrixBox,
  MatrixFlex,
  Row,
  StyledApp,
} from './components/Styled';
import { getMatrix, matrix } from './tables/matrix';
import OponentSection from './components/OpponentSection';
import { useState } from 'react';
import MyPositionSection from './components/MyPositionSection';
import VsSqueezeSection from './components/VsSqueezeSection';
import WithCallerSection from './components/WithCallerSection';
import ColorDescription from './components/ColorDescription';

type colorsOptions = {
  [key: string]: string;
};

const colors: colorsOptions = {
  1: '#2ad508',
  2: '#99ed1b',
  3: '#e25050',
  4: '#ffe100',
  5: '#0070C0',
  14: '#FC9F6C',
  15: '#BFBFBF',
  16: '#111111',
};

function App() {
  const [myPosition, setMyPosition] = useState<string>('BB');
  const [opponentPosition, setOpponentPosition] = useState<string>('SB');
  const [plusCallerPosition, setPlusCallerPosition] = useState<string>('');
  const [squeeze, setSqueeze] = useState<string>('');

  const matrixColors = getMatrix(
    myPosition,
    opponentPosition,
    plusCallerPosition
  );
  const cellsArrays =
    matrixColors && matrixColors.split('.').map((row) => row.split('-'));

  return (
    <StyledApp>
      <ButtonsBox>
        <Flex>
          <MyPositionSection
            selectedPosition={myPosition}
            setMyPosition={setMyPosition}
            setOpponentPosition={setOpponentPosition}
            setSqueeze={setSqueeze}
            setPlusCaller={setPlusCallerPosition}
          />
          <OponentSection
            opponentPosition={opponentPosition}
            setOpponentPosition={setOpponentPosition}
            setPlusCaller={setPlusCallerPosition}
            myPosition={myPosition}
            setSqueeze={setSqueeze}
          />
        </Flex>
        <Flex>
          <VsSqueezeSection
            squeeze={squeeze}
            setSqueeze={setSqueeze}
            myPosition={myPosition}
            setPlusCaller={setPlusCallerPosition}
            setOpponent={setOpponentPosition}
          />
          <WithCallerSection
            myPosition={myPosition}
            opponentPosition={opponentPosition}
            plusCallerPosition={plusCallerPosition}
            setPlusCallerPosition={setPlusCallerPosition}
          />
        </Flex>
      </ButtonsBox>
      <MatrixBox>
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
        <MatrixFlex>
          <ColorDescription color={colors[1]} text='3Bet/All In' />
          <ColorDescription color={colors[2]} text='3Bet/Call 4Bet' />
          <ColorDescription color={colors[3]} text='3Bet/Fold' />
          <ColorDescription color={colors[4]} text='Call' />
        </MatrixFlex>
        <MatrixFlex>
          <ColorDescription color={colors[5]} text='OR' />
          <ColorDescription color={colors[14]} text='Loose' />
          <ColorDescription color={colors[15]} text='Loose' />
        </MatrixFlex>
      </MatrixBox>
    </StyledApp>
  );
}

export default App;
