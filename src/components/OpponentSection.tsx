import { Button, Section, Title } from './Styled';

interface OpponentSectionProps {
  opponentPosition: string;
  setOpponentPosition: (x: string) => void;
  setSqueeze: (x: string) => void;
  setPlusCaller: (x: string) => void;
  myPosition: string;
}

const OpponentSection = ({
  opponentPosition,
  setOpponentPosition,
  setSqueeze,
  setPlusCaller,
  myPosition,
}: OpponentSectionProps) => {
  const selectOpponent = (opponentSelected: string) => {
    setOpponentPosition(opponentSelected);
    setSqueeze('');
    setPlusCaller('');
  };

  return (
    <Section>
      <Title>OPPONENT</Title>
      <Button
        selected={opponentPosition === 'BB'}
        disabled={myPosition === 'BB'}
        onClick={() => selectOpponent('BB')}
      >
        BB
      </Button>
      <Button
        selected={opponentPosition === 'SB'}
        disabled={myPosition === 'SB'}
        onClick={() => selectOpponent('SB')}
      >
        SB
      </Button>
      <Button
        selected={opponentPosition === 'BTN'}
        disabled={myPosition === 'BTN'}
        onClick={() => selectOpponent('BTN')}
      >
        BTN
      </Button>
      <Button
        selected={opponentPosition === 'CO'}
        disabled={myPosition === 'CO'}
        onClick={() => selectOpponent('CO')}
      >
        CO
      </Button>
      <Button
        selected={opponentPosition === 'MP'}
        disabled={myPosition === 'MP'}
        onClick={() => selectOpponent('MP')}
      >
        MP
      </Button>
      <Button
        selected={opponentPosition === 'UTG'}
        disabled={myPosition === 'UTG'}
        onClick={() => selectOpponent('UTG')}
      >
        UTG
      </Button>
    </Section>
  );
};

export default OpponentSection;
