import styled, { keyframes } from 'styled-components';

export const Aside = styled.aside`
  width: 60px;
  height: 100vh;
  position: fixed;
  bottom: calc(115px - 53px);
  left: 84px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1366px) {
    left: 44px;
  }

  @media (max-width: 1280px) {
    left: 22px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const List = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const VerticalText = styled.p`
  text-transform: capitalize;
  margin: 71px 0 22px;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
  text-align: center;
  font-weight: 500;
  line-height: 225.56%;
  letter-spacing: 1px;
`;

const MouseAnimation = keyframes`   
  0% {
    transform: translateY(5px);
  }
  25% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(15px);
  }
  75% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(5px);
  }
`;

export const Mouse = styled.div<{ $rotate: boolean }>`
  animation: ${MouseAnimation} 3s linear infinite;

  & > i {
    transition: all 300ms ease-in-out;
    transform: ${(props) => props.$rotate && 'rotate(180deg)'};
  }
`;
