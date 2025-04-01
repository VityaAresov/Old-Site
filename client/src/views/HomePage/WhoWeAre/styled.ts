import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 184px;
  padding-bottom: 80px;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 168px;
    background: no-repeat url('./images/WHO_WE_ARE.svg');
    position: absolute;
    top: 99px;
    left: 0;

    @media (max-width: ${(props) => props.theme.screens.laptop}) {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.laptop}) {
    padding-top: 92px;
    padding-bottom: 40px;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 46px;
    padding-bottom: 20px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 56px;
    padding-bottom: 100px;
  }
`;
export const TopRow = styled.div`
  margin-bottom: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    margin-bottom: 49px;
    gap: 15px;
  }

  @media (max-width: ${(props) => props.theme.screens.laptop}) {
    margin-bottom: 49px;
    gap: 10px;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    flex-direction: column;
    margin-bottom: 29px;
  }
`;

export const Info = styled.div`
  max-width: 552px;
  padding-top: 98px;
  padding-bottom: 14px;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    padding-top: 49px;
    padding-bottom: 7px;
  }

  /* @media (max-width: ${(props) => props.theme.screens.laptop}) {
    padding-top: 49px;
    padding-bottom: 7px;
  } */

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Title = styled.h3`
  margin-bottom: 28px;
  font-size: 2.1875em;
  font-weight: 700;
  line-height: 132.213%;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    margin-bottom: 14px;
    font-size: 2em;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 1em;
    font-weight: 800;
    line-height: normal;
  }
`;

export const ColoredText = styled.span`
  color: ${(props) => props.theme.colors.main};

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 2em;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.96px;
  }
`;

export const Description = styled.p`
  font-weight: 700;
  line-height: 189.375%;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    font-size: 0.85em;
  }

  @media (max-width: ${(props) => props.theme.screens.laptop}) {
    font-size: 0.8125em;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 0.875em;
    font-weight: 500;
    line-height: 142.857%;
  }
`;

export const BottomRow = styled.div`
  padding-top: 53px;
  padding-bottom: 54px;
  display: flex;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    padding-top: 26.5px;
    padding-bottom: 27px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 0;
    margin-top: 29px;
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    flex-wrap: nowrap;
  }
`;

export const Image = styled.img.attrs<{ $src: string }>((props) => ({
  src: props.$src,
}))`
  width: 633px;
  height: 406px;
  border-radius: 16px;
  object-fit: cover;
  position: relative;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    width: calc(633px / 1.25);
    height: calc(406px / 1.25);
  }

  /* @media (max-width: ${(props) => props.theme.screens.laptop}) {
    width: calc(633px / 1.5);
    height: calc(406px / 1.5);
  } */

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: none;
  }
`;
