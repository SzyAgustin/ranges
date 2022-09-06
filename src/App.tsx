import Cell from './components/Cell';
import {
  Button,
  ButtonsBox,
  Flex,
  MatrixBox,
  MatrixFlex,
  Row,
  Section,
  StyledApp,
  Title,
} from './components/Styled';
import { matrix } from './tables/matrix';
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
  2: '#a8e250',
  3: '#e25050',
  4: '#f1e909',
  5: '#0070C0',
  14: '#FC9F6C',
  15: '#BFBFBF',
  16: '#111111',
};

const cellsColors =
  '1-1-2-4-4-4-4-4-4-3-4-4-4.1-1-4-4-4-4-4-3-3-3-4-0-0.4-4-2-4-4-3-3-0-0-0-0-0-0.4-4-4-4-4-4-4-0-0-0-0-0-0.4-0-0-0-4-4-4-4-0-0-0-0-0.0-0-0-0-0-4-4-4-0-0-0-0-0.0-0-0-0-0-0-4-4-4-0-0-0-0.0-0-0-0-0-0-0-4-4-4-0-0-0.0-0-0-0-0-0-0-0-4-4-4-0-0.0-0-0-0-0-0-0-0-0-4-4-4-0.0-0-0-0-0-0-0-0-0-0-4-4-0.0-0-0-0-0-0-0-0-0-0-0-4-0.0-0-0-0-0-0-0-0-0-0-0-0-4';
const cellsArrays = cellsColors.split('.').map((row) => row.split('-'));

function App() {
  const [myPosition, setMyPosition] = useState<string>('BB');
  const [opponentPosition, setOpponentPosition] = useState<string>('');
  const [plusCallerPosition, setPluCallerPosition] = useState<string>('');

  return (
    <StyledApp>
      <ButtonsBox>
        <Flex>
          <MyPositionSection
            selectedPosition={myPosition}
            setYourPosition={setMyPosition}
            setOpponentPosition={setOpponentPosition}
          />
          <OponentSection
            opponentPosition={opponentPosition}
            setOpponentPosition={setOpponentPosition}
            myPosition={myPosition}
          />
        </Flex>
        <Flex>
          <VsSqueezeSection myPosition={myPosition} />
          <WithCallerSection
            myPosition={myPosition}
            opponentPosition={opponentPosition}
            plusCallerPosition={plusCallerPosition}
            setPlusCallerPosition={setPluCallerPosition}
          />
        </Flex>
      </ButtonsBox>
      <MatrixBox>
        {matrix.map((row, i) => (
          <Row>
            {row.map((cards, j) => (
              <Cell cards={cards} color={colors[cellsArrays[i][j]]} />
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
