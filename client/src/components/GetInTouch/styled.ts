import styled from 'styled-components';

export const Contact = styled.section`
  padding-top: 69px;
  padding-bottom: 197px;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 168px;
    background: no-repeat url('./images/CONTACT.svg');
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: ${(props) => props.theme.screens.laptop}) {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 0;
    padding-bottom: 75px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  z-index: 2;

  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    align-items: flex-start;
  }
`;

export const FormContainer = styled.div`
  padding: 53px 0 64px;
  border-radius: 24px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%),
    linear-gradient(174deg, #ec75ff -38.02%, #5e45ec 111.98%);

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    background: transparent;
    padding: 0;
    width: 100%;
  }
`;

export const HideOnTablet = styled.div<{ $hide?: boolean }>`
  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    display: ${(props) => (props.$hide ? 'none' : 'block')};
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-top: 37px;
  }
`;

export const CTitle = styled.p`
  color: ${(props) => props.theme.colors.main};
  font-size: 3em;
  font-weight: 700;
  line-height: 96.405%;

  @media (max-width: 700px) {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1em;
    font-weight: 500;
    line-height: normal;
  }
`;

export const CSubtitle = styled.p`
  margin: 43px 0 48px;
  font-size: 5.875em;
  font-weight: 700;
  line-height: 49.228%;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    font-size: 4.5em;
  }

  @media (max-width: 1285px) {
    font-size: 4em;
  }

  @media (max-width: 1170px) {
    font-size: 5.875em;
  }

  @media (max-width: 700px) {
    color: ${(props) => props.theme.colors.main};
    font-size: 2em;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0 0 1px;
  }
`;

export const CDescription = styled.p`
  max-width: 545px;
  font-size: 1em;
  font-weight: 700;
  line-height: 217.34%;

  @media (max-width: 700px) {
    max-width: 335px;
    font-size: 0.875em;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Details = styled.div`
  /* margin: 49px 0 22px; */
  margin-top: 49px;
  display: flex;
  flex-direction: column;
  gap: 82px;

  @media (max-width: 1170px) {
    margin-bottom: 42px;
  }

  @media (max-width: 700px) {
    margin-top: 24px;
    margin-bottom: 40px;
    gap: 28px;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Circle = styled.div`
  width: 65.1px;
  height: 65.1px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.text};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const DTitle = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.main};
  font-size: 1.125em;
  font-weight: 700;
  line-height: 257.08%;

  @media (max-width: 700px) {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.125em;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.36px;
  }
`;

export const DSubtitle = styled.p`
  font-size: 1.375em;
  font-weight: 600;
  line-height: 210.338%;

  @media (max-width: 700px) {
    font-size: 1em;
    font-weight: 600;
    line-height: normal;
  }
`;

export const MobTitle = styled.p`
  display: none;
  width: 335px;
  color: ${(props) => props.theme.colors.main};
  font-size: 2em;
  font-weight: 800;
  letter-spacing: -0.96px;
  margin-bottom: 16px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-left: 0;
    width: 100%;
    display: block;
  }
`;
