import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 98px;
  padding-bottom: 143px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 0;
    padding-bottom: 80px;
  }
`;
export const Title = styled.h3`
  text-align: center;
  font-size: 2.625em;
  font-weight: 500;
  line-height: 75.653%;
  text-transform: capitalize;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 1em;
    font-weight: 800;
    line-height: normal;
    text-align: left;
  }

  & span {
    color: ${(props) => props.theme.colors.main};

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
      font-size: 2em;
      font-weight: 800;
      line-height: normal;
      letter-spacing: -0.96px;
    }
  }
`;

export const Subtitle = styled.h4`
  margin: 24px auto 63px;
  max-width: 432px;
  color: rgba(255, 255, 255, 0.64);
  text-align: center;
  font-size: 1em;
  font-weight: 500 !important;
  line-height: normal;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    text-align: left;
    margin: 10px auto 46px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    gap: 25px;
  }

  @media (max-width: 1420px) {
    gap: 10px;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
`;

export const Card = styled.li`
  display: flex;
  gap: 5px;

  &:hover > div {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);

    &::before {
      opacity: 1;
    }
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    gap: 10px;

    &:nth-child(1n) {
      margin-left: -10%;
    }

    &:nth-child(2n) {
      margin-left: 10%;
    }

    &:nth-child(2n) p {
      text-align: right;
    }
  }
`;

export const Name = styled.p`
  font-size: 35px;
  font-weight: 700;
  line-height: 132.213%;
  letter-spacing: 0.35px;

  & span {
    color: ${(props) => props.theme.colors.main};
  }

  @media (min-width: 1080px) {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(180deg);
  }
`;

export const Image = styled.div<{ $src: string }>`
  width: 380px;
  height: 490px;
  border-radius: 16px;
  background: center bottom / cover no-repeat url(${(props) => props.$src});
  position: relative;

  &::before {
    content: attr(data-name);
    padding-top: 43px;
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%);
    color: ${(props) => props.theme.colors.main};
    font-family: 'Manrope';
    text-align: center;
    font-size: 1.375em;
    font-weight: 800;
    line-height: normal;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: opacity 300ms ease-in-out;
  }

  &::after {
    content: attr(data-pos);
    padding-top: 83px;
    opacity: 0;
    width: 290px;
    height: 100%;
    font-family: 'Manrope';
    text-align: center;
    font-size: 1em;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    transition: opacity 300ms ease-in-out;

    @media (max-width: ${(props) => props.theme.screens.laptopL}) {
      width: 240px;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    width: 290px;
  }

  /* @media (max-width: 1420px) {
    width: 350px;
    height: 460px;
  }

  @media (max-width: 1250px) {
    width: 320px;
    height: 430px;
  }

  @media (max-width: 1160px) {
    width: 290px;
    height: 370px;
  } */
`;
