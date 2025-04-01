import styled from 'styled-components';

export const Button = styled.button.attrs<{ $open?: boolean }>(() => ({
  type: 'button',
}))`
  width: 147px;
  height: 51px;
  background: transparent;
  box-shadow: 0px 0px 5.3px 0px rgba(0, 0, 0, 0.25);

  border: 2px solid ${(props) => props.theme.colors.main};
  border-radius: 16px;

  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  line-height: 289.215%;
  text-align: center;
  text-transform: capitalize;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%),
      linear-gradient(174deg, #ec75ff -38.02%, #5e45ec 111.98%);
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    display: ${(props) => (props.$open ? 'block' : 'none')};
    width: 100%;
    background: ${(props) => props.theme.colors.main};
    font-size: 0.9375em;
    font-weight: 500;
    line-height: normal;

    &:hover {
      transform: none;
    }
  }
`;
