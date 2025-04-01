import styled from 'styled-components';

export const Hero = styled.div`
  padding-top: 169px;
  height: 490px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    linear-gradient(171deg, #5e45ec 12.22%, #ec75ff 111.38%), #fff;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 93px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: none;
  }
`;

export const Div = styled.div`
  height: calc(490px - 169px);
  position: relative;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    height: calc(490px - 93px);
  }
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 89px;
  left: 0;

  & :first-child {
    font-size: 2.875em;
    font-weight: 700;
  }

  & :last-child {
    font-size: 5.375em;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
