import { Button, Section, Title } from './Styled';

interface MyPositionSectionProps {
  selectedPosition: string;
  setYourPosition: (x: string) => void;
  setOpponentPosition: (x: string) => void;
}

const MyPositionSection = ({
  selectedPosition,
  setYourPosition,
  setOpponentPosition,
}: MyPositionSectionProps) => {
  return (
    <Section>
      <Title>YOUR POSITION</Title>
      <Button
        selected={selectedPosition === 'BB'}
        onClick={() => {
          setYourPosition('BB');
          setOpponentPosition('SB');
        }}
      >
        BB
      </Button>
      <Button
        selected={selectedPosition === 'SB'}
        onClick={() => {
          setYourPosition('SB');
          setOpponentPosition('');
        }}
      >
        SB
      </Button>
      <Button
        selected={selectedPosition === 'BTN'}
        onClick={() => {
          setYourPosition('BTN');
          setOpponentPosition('');
        }}
      >
        BTN
      </Button>
      <Button
        selected={selectedPosition === 'CO'}
        onClick={() => {
          setYourPosition('CO');
          setOpponentPosition('');
        }}
      >
        CO
      </Button>
      <Button
        selected={selectedPosition === 'MP'}
        onClick={() => {
          setYourPosition('MP');
          setOpponentPosition('');
        }}
      >
        MP
      </Button>
      <Button
        selected={selectedPosition === 'UTG'}
        onClick={() => {
          setYourPosition('UTG');
          setOpponentPosition('');
        }}
      >
        UTG
      </Button>
    </Section>
  );
};

export default MyPositionSection;
