import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from '../../ui/Button';

export const TowRow = styled.div<{ $show: boolean; $showOnlyOnMobile: boolean }>`
  display: ${(props) => (props.$show ? 'block' : 'none')};
  ${(props) => {
    if (props.$show && props.$showOnlyOnMobile) {
      return css`
        display: none;

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          display: block;
        }
      `;
    }
  }}
  padding: 59px 0 79px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    linear-gradient(117deg, #5e45ec 23.57%, #ec75ff 85.6%), linear-gradient(90deg, #b662f8 1.6%, #08d5c7 99.89%);

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 58px 0 60px;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 13px 0 37px;
  font-size: 1.375em;
  font-weight: 800;
  line-height: 210.338%;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin: 22px 0 25px;
  }
`;

export const BottomRow = styled.div`
  padding: 75px 0 81px;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 56px 0 21px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img.attrs({
  src: `./images/logo.svg`,
  alt: 'Keepcorn.studios',
})`
  width: 217.41px;
  height: 50.69px;

  /* @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 129px;
    height: 35px;
  } */
`;

export const Menu = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 47px;

  @media (max-width: ${(props) => `calc(${props.theme.screens.tablet} + 90px)`}) {
    flex-grow: 0;
    justify-content: flex-start;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-top: 34px;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Li = styled.li`
  &:last-of-type {
    margin-right: 113px;

    @media (max-width: ${(props) => `calc(${props.theme.screens.tablet} + 90px)`}) {
      margin-right: 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-transform: capitalize;
  font-weight: 500;
  line-height: 289.215%;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    line-height: 125%;
  }
`;

export const SubRow = styled.div`
  margin-top: 81px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-top: 57px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const Copyright = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8125em;
  font-weight: 800;
  line-height: 355.957%;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-top: 41px;
    font-weight: 400;
    line-height: normal;
  }
`;

export const SubButton = styled(Button)`
  display: none;
  background-color: transparent;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    display: block;
  }
`;
