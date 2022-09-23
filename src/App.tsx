import {
  ButtonsBox,
  CommentsBox,
  CommentsLine,
  Flex,
  MatrixBox,
  MatrixFlex,
  StyledApp,
} from './components/Styled';
import { getMatrix, matrix, getComments } from './tables/matrix';
import OponentSection from './components/OpponentSection';
import { useState } from 'react';
import MyPositionSection from './components/MyPositionSection';
import VsSqueezeSection from './components/VsSqueezeSection';
import WithCallerSection from './components/WithCallerSection';
import ColorDescription from './components/ColorDescription';
import Matrix from './components/Matrix';

export type colorsOptions = {
  [key: string]: string;
};

const colors: colorsOptions = {
  1: '#2ad508',
  2: '#99ed1b',
  3: '#e25050',
  4: '#efe700',
  5: '#0070C0',
  14: '#f98c26',
  15: '#BFBFBF',
};

function App() {
  const [myPosition, setMyPosition] = useState<string>('BB');
  const [opponentPosition, setOpponentPosition] = useState<string>('SB');
  const [plusCallerPosition, setPlusCallerPosition] = useState<string>('');
  const [squeeze, setSqueeze] = useState<string>('');

  const matrixColors = getMatrix(
    myPosition,
    opponentPosition,
    plusCallerPosition,
    squeeze
  );
  const cellsArrays =
    matrixColors && matrixColors.split('.').map((row) => row.split('-'));
  const comments = getComments(
    myPosition,
    opponentPosition,
    plusCallerPosition,
    squeeze
  );

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
        <Matrix cellsArrays={cellsArrays} matrix={matrix} colors={colors} />
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
        <CommentsBox>
          {comments.split(' ------ ').map((line) => (
            <div>{line}</div>
          ))}
        </CommentsBox>
      </MatrixBox>
    </StyledApp>
  );
}

export default App;
