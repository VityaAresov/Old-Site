import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 3em;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -1.44px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: none;
  }
`;

export const Description = styled.p`
  margin-top: 24.79px;
  max-width: 579px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25em;
  font-weight: 400;
  line-height: 140%;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: none;
  }
`;
