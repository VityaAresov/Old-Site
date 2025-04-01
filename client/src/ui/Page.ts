import styled from 'styled-components';

export const Page = styled.main`
  padding-top: 169px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 93px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 0px;
  }
`;
