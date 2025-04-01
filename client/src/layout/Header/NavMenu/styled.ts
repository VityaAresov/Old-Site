import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.img.attrs({
  src: `./images/logo.svg`,
  alt: 'Keepcorn.studios',
})`
  width: 217.41px;
  height: 50.69px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 129px;
    height: 35px;
  }
`;

export const Menu = styled.ul<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 47px;

  ${(props) => {
    if (props.$open) {
      return css`
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          margin-top: 34px;
          margin-bottom: 62px;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }
      `;
    } else {
      return css`
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          display: none;
        }
      `;
    }
  }}
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: capitalize;
  font-weight: 500;
  line-height: 289.215%;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    line-height: normal;
    font-size: 1.5em;
  }

  &.active,
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.text};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      border-bottom: none;
    }
  }
`;
