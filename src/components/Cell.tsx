import styled from 'styled-components';

interface StyledCellProps {
  color?: string;
}

const StyledCell = styled.div<StyledCellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 35px;
  margin-bottom: 1.3px;
  margin-left: 1.3px;
  font-size: 13px;
  background-color: ${(p) => (p.color ? p.color : '#111111')};
`;

interface CellProps {
  cards: string;
  color?: string;
}

const Cell = ({ cards, color }: CellProps) => {
  return (
    <StyledCell color={color}>
      <span>{cards}</span>
    </StyledCell>
  );
};

export default Cell;
