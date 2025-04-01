import styled from 'styled-components';

export const List = styled.ul<{ $open?: boolean }>`
  margin-bottom: 24px;
  display: none;
  gap: 10px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    display: ${(props) => props.$open && 'flex'};
  }
`;

export const Circle = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 1.2px solid ${(props) => props.theme.colors.text};
`;
export const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
