import { Button, Section, Title } from './Styled';

interface VsSqueezeSectionProps {
  myPosition: string;
}

const VsSqueezeSection = ({ myPosition }: VsSqueezeSectionProps) => {
  return (
    <Section>
      <Title>VS SQUEEZE</Title>
      <Button
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
      <Button disabled={!(myPosition === 'UTG' || myPosition === 'MP')}>
        OOP
      </Button>
    </Section>
  );
};

export default VsSqueezeSection;
