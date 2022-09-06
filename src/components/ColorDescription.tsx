import styled from 'styled-components';

interface ColorDescriptionProps {
  color: string;
  text?: string;
}

const ColorDescriptionBox = styled.div<ColorDescriptionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${(p) => p.color};
  font-size: 11px;
`;

const ColorDescription = ({ color, text }: ColorDescriptionProps) => {
  return (
    <ColorDescriptionBox color={color}>
      <strong>{text}</strong>
    </ColorDescriptionBox>
  );
};

export default ColorDescription;
