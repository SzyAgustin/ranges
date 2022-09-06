import { Button, Section, Title } from './Styled';

interface OpponentSectionProps {
  opponentPosition: string;
  setOpponentPosition: (x: string) => void;
  myPosition: string;
}

const OpponentSection = ({
  opponentPosition,
  setOpponentPosition,
  myPosition,
}: OpponentSectionProps) => {
  return (
    <Section>
      <Title>OPPONENT</Title>
      <Button
        selected={opponentPosition === 'BB'}
        disabled={myPosition === 'BB'}
        onClick={() => setOpponentPosition('BB')}
      >
        BB
      </Button>
      <Button
        selected={opponentPosition === 'SB'}
        disabled={myPosition === 'SB'}
        onClick={() => setOpponentPosition('SB')}
      >
        SB
      </Button>
      <Button
        selected={opponentPosition === 'BTN'}
        disabled={myPosition === 'BTN'}
        onClick={() => setOpponentPosition('BTN')}
      >
        BTN
      </Button>
      <Button
        selected={opponentPosition === 'CO'}
        disabled={myPosition === 'CO'}
        onClick={() => setOpponentPosition('CO')}
      >
        CO
      </Button>
      <Button
        selected={opponentPosition === 'MP'}
        disabled={myPosition === 'MP'}
        onClick={() => setOpponentPosition('MP')}
      >
        MP
      </Button>
      <Button
        selected={opponentPosition === 'UTG'}
        disabled={myPosition === 'UTG'}
        onClick={() => setOpponentPosition('UTG')}
      >
        UTG
      </Button>
    </Section>
  );
};

export default OpponentSection;
