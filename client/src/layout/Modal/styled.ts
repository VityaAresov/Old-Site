import { styled, css } from 'styled-components';

export const ModalTransition = css`
  opacity: 0;
  pointer-events: none;
  transform: scale(0);

  &.modal-enter-done {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
  }

  &.modal-exit {
    opacity: 0;
    transform: scale(0);
  }
`;

export const Outside = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-in-out;
  overflow: hidden;
  z-index: 999;

  ${ModalTransition}

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    background-color: rgba(0, 0, 0, 0.36);
  }
`;

export const Window = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 24px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    border-radius: 32px;
  }
`;

export const Controls = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const Content = styled.div`
  padding-bottom: 54px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-bottom: 40px;
  }
`;
