import styled from 'styled-components';

export const Container = styled.div<{ $page?: boolean }>`
  padding-top: ${(props) => props.$page && '168.69px'};
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 1380px;
  box-sizing: content-box !important;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    max-width: 1060px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: ${(props) => props.$page && 'calc(92px - 60px)'};
  }
`;
