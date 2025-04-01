import styled from 'styled-components';

export const Section = styled.section`
  padding: 300px 0 200px;
  position: relative;

  &::before {
    margin-left: 39px;
    content: '';
    display: block;
    width: calc(100% - 39px);
    height: 168px;
    background: no-repeat url('./images/OUR_CLIENTS.svg');
    position: absolute;
    top: 179px;
    left: 0;

    @media (max-width: 1360px) {
      margin-left: 0;
    }

    @media (max-width: ${(props) => props.theme.screens.laptop}) {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    padding: 150px 0 100px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 46px 0 0px;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    justify-content: center;
  }
`;

export const Images = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    & :last-child {
      display: none;
    }
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 295px;
  border-radius: 16px;
  object-fit: cover;

  &:not(:last-of-type) {
    margin-right: 26px;
  }
`;

export const CarouselWrapper = styled.div`
  max-width: 696px;
  align-self: end;
  height: 482px;
  position: relative;

  & .slider-dots {
    & .paging-item {
      opacity: 1 !important;

      & svg {
        width: 10px;
        height: 10px;
      }

      & svg * {
        fill: ${(props) => props.theme.colors.text};
      }

      &.active svg * {
        fill: ${(props) => props.theme.colors.main};
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        opacity: 0.5 !important;
      }
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      top: 33px !important;
    }
  }

  &::before {
    content: '';
    display: block;
    width: 514px;
    height: 450px;
    background: url('./images/slider-camera.svg');
    position: absolute;
    bottom: 17px;
    right: 35px;

    @media (max-width: 696px) {
      display: none;
    }
  }

  @media (max-width: 740px) {
    max-width: 580px;
    height: 596px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    max-width: 335px;
  }
`;

export const Controls = styled.button`
  margin-top: 35px;
  cursor: pointer;
  width: 64px;
  height: 64px;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;

  &:hover {
    border: 0;
    background: linear-gradient(171deg, #5e45ec 12.22%, #ec75ff 111.38%), #d9d9d9;
  }
`;

export const LeftControls = styled(Controls)`
  & i {
    transform: rotate(-135deg);
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    position: absolute;
    bottom: -128px;
    left: 25%;
  }
`;

export const RightControls = styled(Controls)`
  & i {
    transform: rotate(45deg);
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    position: absolute;
    bottom: -128px;
    right: 25%;
  }
`;
