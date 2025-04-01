import styled from 'styled-components';
import { Button } from '../../../ui/Button';

export const Section = styled.section`
  padding-top: 199px;
  padding-bottom: 116px;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 168px;
    background: no-repeat url('./images/ABOUT_US.svg');
    position: absolute;
    top: 100px;
    left: 0;

    @media (max-width: ${(props) => props.theme.screens.laptop}) {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 56px;
    padding-bottom: 58px;
  }
`;

export const Container = styled.div<{ $page?: boolean }>`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 1590px;
  box-sizing: content-box !important;
  position: relative;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    max-width: 1190px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 15px;

  @media (max-width: 1330px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 717px;
  height: 498px;
  border-radius: 16px;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    width: 677px;
    height: 458px;
  }

  @media (max-width: 749px) {
    width: 580px;
    height: 378px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
    height: 270px;
    border-radius: 5.515px;
  }
`;

export const Info = styled.div`
  margin-bottom: 42px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 0 20px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.div`
  font-size: 2.5em;
  font-weight: 700;
  line-height: 98.836%;
  text-transform: capitalize;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 1em;
    font-weight: 800;
    line-height: normal;
  }
`;

export const Subtitle = styled.div`
  color: ${(props) => props.theme.colors.main};
  font-size: 40px;
  font-weight: 700;
  line-height: 98.836%;
  text-transform: capitalize;
  margin: 8px 0 32px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 2em;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: -8px 0 10px;
  }
`;

export const Description = styled.div`
  max-width: 565px;
  color: rgba(255, 255, 255, 0.64);
  font-size: 1em;
  font-weight: 500;
  line-height: normal;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 0.875em;
    font-weight: 500;
    line-height: 17.5px;
    letter-spacing: -0.42px;

    & span {
      display: none;
    }
    &:after {
      content: 'We are not just a team, we are a collective of passionate individuals driven by the relentless pursuit of excellence. From concept to execution, we breathe life into ideas, turning imagination into reality.';
    }
  }
`;

export const List = styled.ul`
  margin-top: 141px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  gap: 10px;

  @media (max-width: 1045px) {
    margin-top: 116px;
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-top: 44px;
    padding: 0 20px;
  }
`;

export const Li = styled.li`
  display: flex;
  height: 128px;
  gap: 12px;

  @media (max-width: 1045px) {
    display: block;
    height: auto;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
`;

export const LTitle = styled.p`
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 0.64px;
  text-transform: capitalize;

  @media (max-width: 1565px) {
    font-size: 1.5em;
  }

  @media (max-width: 1265px) {
    font-size: 1.25em;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 1.25em;
    font-weight: 600;
    line-height: 156.372% !important;
    letter-spacing: 0.4px;
    text-transform: capitalize;
  }
`;

export const LDescr = styled.p`
  max-width: 432px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.64);
  font-size: 1em;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 1265px) {
    max-width: 390px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 0.875em;
    font-weight: 400;
    line-height: normal;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
  display: none;
  background-color: transparent;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: block;
  }
`;
