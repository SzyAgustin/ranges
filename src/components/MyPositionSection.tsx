import { Button, Section, Title } from './Styled';

interface MyPositionSectionProps {
  selectedPosition: string;
  setMyPosition: (x: string) => void;
  setOpponentPosition: (x: string) => void;
  setSqueeze: (x: string) => void;
  setPlusCaller: (x: string) => void;
}

const MyPositionSection = ({
  selectedPosition,
  setMyPosition,
  setOpponentPosition,
  setSqueeze,
  setPlusCaller,
}: MyPositionSectionProps) => {
  const selectMyPosition = (myPosition: string) => {
    setMyPosition(myPosition);
    setOpponentPosition(myPosition === 'BB' ? 'SB' : '');
    setSqueeze('');
    setPlusCaller('');
  };

  return (
    <Section>
      <Title>MY RANGE</Title>
      <Button
        selected={selectedPosition === 'BB'}
        onClick={() => selectMyPosition('BB')}
      >
        BB
      </Button>
      <Button
        selected={selectedPosition === 'SB'}
        onClick={() => selectMyPosition('SB')}
      >
        SB
      </Button>
      <Button
        selected={selectedPosition === 'BTN'}
        onClick={() => selectMyPosition('BTN')}
      >
        BTN
      </Button>
      <Button
        selected={selectedPosition === 'CO'}
        onClick={() => selectMyPosition('CO')}
      >
        CO
      </Button>
      <Button
        selected={selectedPosition === 'MP'}
        onClick={() => selectMyPosition('MP')}
      >
        MP
      </Button>
      <Button
        selected={selectedPosition === 'UTG'}
        onClick={() => selectMyPosition('UTG')}
      >
        UTG
      </Button>
    </Section>
  );
};

export default MyPositionSection;
