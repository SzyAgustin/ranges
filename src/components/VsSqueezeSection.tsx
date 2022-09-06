import { Button, Section, Title } from './Styled';

interface VsSqueezeSectionProps {
  myPosition: string;
  squeeze: string;
  setSqueeze: (x: string) => void;
  setOpponent: (x: string) => void;
  setPlusCaller: (x: string) => void;
}

const VsSqueezeSection = ({
  myPosition,
  squeeze,
  setSqueeze,
  setOpponent,
  setPlusCaller,
}: VsSqueezeSectionProps) => {
  const selectSqueeze = (squeezePosition: string) => {
    setSqueeze(squeezePosition);
    setOpponent('');
    setPlusCaller('');
  };

  return (
    <Section>
      <Title>VS SQUEEZE</Title>
      <Button
        onClick={() => selectSqueeze('IP')}
        selected={squeeze === 'IP'}
        disabled={
          !(
            myPosition === 'UTG' ||
            myPosition === 'MP' ||
            myPosition === 'CO' ||
            myPosition === 'BTN'
          )
        }
      >
        IP
      </Button>
      <Button
        onClick={() => selectSqueeze('OOP')}
        disabled={!(myPosition === 'UTG' || myPosition === 'MP')}
        selected={squeeze === 'OOP'}
      >
        OOP
      </Button>
    </Section>
  );
};

export default VsSqueezeSection;
