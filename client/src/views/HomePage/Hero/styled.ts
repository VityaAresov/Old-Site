import styled from 'styled-components';

export const StyledHero = styled.div`
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    linear-gradient(171deg, #5e45ec 12.22%, #ec75ff 111.38%), #fff;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: center / 30% no-repeat url('./images/clip.png');
    background-position: 75% 75%;
    position: absolute;
    z-index: 1;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 350px;
      height: 400px;
      bottom: 0;
      right: 0;
      background-size: contain;
      background-position: 145px 50px;
      opacity: 0.6;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    height: calc(100vh - 93px);
  }
`;

export const Content = styled.div`
  height: calc(100vh - 169px - ${(props) => props.theme.sizes.adBarHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-top: 82px;
    display: block;
    max-height: calc(100vh - 93px - ${(props) => props.theme.sizes.adBarHeightMobile});
  }
`;

export const Subtitle = styled.div`
  text-transform: capitalize;
  font-size: 2.875em;
  font-weight: 700;
  line-height: 100.597%;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    font-size: 2.3em;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 2em;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.96px;
  }
`;

export const Title = styled.div`
  margin: 34px 0 46px;
  font-size: 5.375em;
  font-weight: 700;
  line-height: 53.808%;
  letter-spacing: 1px;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    font-size: 4.8em;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin: -12px 0 8px;
    font-size: 2.5em;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -1.2px;
  }
`;

export const Description = styled.div`
  max-width: 471px;
  font-weight: 700;
  text-align: left;
  line-height: normal;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    max-width: 335px;
    text-align: justify;
    font-size: 0.875em;
    font-weight: 500;
  }
`;

export const WatchVideo = styled.div`
  margin-top: 152px;
  display: flex;
  gap: 17px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.screens.laptop}) {
    margin-top: 43px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-top: 33px;
  }
`;

export const PlayButton = styled.button`
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.text};
  background-color: transparent;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.text};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition: opacity 300ms ease-in-out;
  }

  &::after {
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 13.5px 23.4px 13.5px;
    border-color: transparent transparent ${(props) => props.theme.colors.main} transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(90deg) translate(-45%, 40%);
    z-index: 3;
    transition: border-color 300ms ease-in-out;
  }

  &:hover::before {
    opacity: 0;
  }

  &:hover::after {
    border-color: transparent transparent ${(props) => props.theme.colors.text} transparent;
  }

  &:hover + p {
    transform: translateX(10px);
  }
`;

export const Label = styled.p`
  transition: all 300ms ease-in-out;
`;
