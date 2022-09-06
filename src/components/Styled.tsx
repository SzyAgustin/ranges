import styled from 'styled-components';

export const StyledApp = styled.div`
  margin: 50px auto;
  display: flex;
`;

export const MatrixBox = styled.div`
  width: 40%;
  margin-top: 10px;
`;

export const ButtonsBox = styled.div`
  padding-left: 50px;
  width: 60%;
`;

export const MatrixFlex = styled.div`
  display: flex;
  margin-top: 30px;
  color: black;
`;

export const Flex = styled.div`
  display: flex;
  color: white;
  margin-bottom: 30px;
`;

interface ButtonProps {
  selected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  margin: 3px;
  min-width: 50px;
  height: 30px;
  background-color: ${(p) =>
    p.disabled ? '#2d2d2d' : p.selected ? '#375ed4' : '#454545'};
  color: ${(p) => (p.disabled ? '#a1a1a1' : 'white')};
  border-radius: 5px;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  border: 0px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin: 5px 0;
`;

export const Section = styled.div`
  margin-right: 40px;
  width: 350px;
`;

export const Row = styled.div`
  display: flex;
`;
