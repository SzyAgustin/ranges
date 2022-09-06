import React from 'react';
import { Button, Section, Title } from './Styled';

interface WithCallerSectionProps {
  myPosition: string;
  opponentPosition: string;
  plusCallerPosition: string;
  setPlusCallerPosition: (x: string) => void;
}

const WithCallerSection = ({
  myPosition,
  opponentPosition,
  plusCallerPosition,
  setPlusCallerPosition,
}: WithCallerSectionProps) => {
  const SBDisabled: boolean = !(
    myPosition === 'BB' &&
    (opponentPosition === 'UTG' ||
      opponentPosition === 'MP' ||
      opponentPosition === 'CO' ||
      opponentPosition === 'BTN')
  );

  const BTNDisabled: boolean = !(
    (myPosition === 'BB' || myPosition === 'SB') &&
    (opponentPosition === 'UTG' ||
      opponentPosition === 'MP' ||
      opponentPosition === 'CO')
  );

  const CODisabled: boolean = !(
    (myPosition === 'BB' || myPosition === 'SB' || myPosition === 'BTN') &&
    (opponentPosition === 'UTG' || opponentPosition === 'MP')
  );

  const MPDisabled: boolean = !(
    (myPosition === 'BB' ||
      myPosition === 'SB' ||
      myPosition === 'BTN' ||
      myPosition === 'CO') &&
    opponentPosition === 'UTG'
  );

  return (
    <Section>
      <Title>+ CALLER</Title>
      <Button
        disabled={SBDisabled}
        selected={plusCallerPosition === '+ SB'}
        onClick={() => setPlusCallerPosition('+ SB')}
      >
        + SB
      </Button>
      <Button
        disabled={BTNDisabled}
        selected={plusCallerPosition === '+ BTN'}
        onClick={() => setPlusCallerPosition('+ BTN')}
      >
        + BTN
      </Button>
      <Button
        disabled={CODisabled}
        selected={plusCallerPosition === '+ CO'}
        onClick={() => setPlusCallerPosition('+ CO')}
      >
        + CO
      </Button>
      <Button
        disabled={MPDisabled}
        selected={plusCallerPosition === '+ MP'}
        onClick={() => setPlusCallerPosition('+ MP')}
      >
        + MP
      </Button>
    </Section>
  );
};

export default WithCallerSection;
