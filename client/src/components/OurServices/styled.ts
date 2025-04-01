import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

export const Section = styled.section<{ $onPage?: boolean }>`
  padding-top: ${(props) => (props.$onPage ? '46px' : '180px')};
  padding-bottom: ${(props) => (props.$onPage ? '152px' : '180px')};

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: ${(props) => (props.$onPage ? '36px' : '54px')};
    padding-bottom: 56px;
  }
`;

export const Title = styled.h3`
  font-size: 3em;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -1.44px;
  margin-bottom: 52px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: none;
  }
`;

export const MobTitle = styled.h3<{ $onPage?: boolean }>`
  display: ${(props) => (props.$onPage ? 'none!important' : 'none')};
  font-weight: 800;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: block;
  }
`;

export const MobSubtitle = styled.h3<{ $onPage?: boolean }>`
  display: ${(props) => (props.$onPage ? 'none!important' : 'none')};
  font-size: 2em;
  font-weight: 800;
  letter-spacing: -0.96px;
  margin-bottom: 36px;
  color: ${(props) => props.theme.colors.main};

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: block;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 450px);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  & > li:nth-last-of-type(2) h4 {
    max-width: 390px!important;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 14px!important;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    grid-template-columns: repeat(3, 330px);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 430px);
    justify-content: center;
  }

  @media (max-width: ${(props) => `calc(${props.theme.screens.tablet} + 40px)`}) {
    grid-template-columns: repeat(2, 335px);
  }

  @media (max-width: ${(props) => `calc(${props.theme.screens.mobile} + 125px)`}) {
    grid-template-columns: repeat(1, 335px);
  }
`;

export const LastItem = styled(Link)`
  cursor: pointer;
  padding: 20px;
  width: 100%;
  height: 550px;
  border-radius: 24px;
  background-color: ${(props) => props.theme.colors.secondary4};
  position: relative;
  transition: all 0.6s ease;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-top-left-radius: 24px;
    background: no-repeat url('./images/card-last.png');
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  &:hover {
    transform: rotate(1deg);
    box-shadow:
      -1rem -1rem 1rem -1rem rgba(0, 0, 0, 0.05),
      1rem 1rem 1rem -1rem rgba(0, 0, 0, 0.05),
      0 0 0.5rem 0 rgba(255, 255, 255, 0),
      0 2rem 3.5rem -2rem rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: none;
  }
`;

export const P = styled.p`
  margin-left: 12px;
  margin-top: 4px;
  font-size: 2.5em;
  font-weight: 600;
  line-height: 131.023%;
  letter-spacing: -1.2px;
`;

export const StyledButton = styled.div`
  width: 72px;
  height: 72px;
  border: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 22px;
  right: 22px;
`;

export const ServiceButton = styled(Button)`
  margin-top: 2px;
  display: none;
  background-color: transparent;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: block;
  }
`;
