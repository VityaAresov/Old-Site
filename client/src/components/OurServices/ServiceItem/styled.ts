import styled, { keyframes } from 'styled-components';

export const Shine = keyframes`
    to {
        opacity: 0.2;
        left: 210%;
    }
`;

export const Item = styled.li`
  padding: 20px;
  display: inline-block;
  position: relative;
  width: 100%;
  height: 550px;
  border-radius: 24px;
  background-color: ${(props) => props.theme.colors.secondary4};
  transition: all 0.6s ease;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -30%;
    left: -200%;
    width: 50%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:hover {
    transform: rotate(1deg);
    box-shadow:
      -1rem -1rem 1rem -1rem rgba(0, 0, 0, 0.05),
      1rem 1rem 1rem -1rem rgba(0, 0, 0, 0.05),
      0 0 0.5rem 0 rgba(255, 255, 255, 0),
      0 2rem 3.5rem -2rem rgba(0, 0, 0, 0.5);

    & img {
      transform: scale(1.03);
    }

    &::after {
      animation: ${Shine} 1s ease-out;
    }
  }

  @media (max-width: ${(props) => `calc(${props.theme.screens.tablet} + 40px)`}) {
    padding: 10px;
  }
`;

export const ImageHolder = styled.div`
  margin: 0 auto;
  border-radius: 16px;
  width: 410px;
  height: 214px;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    width: 290px;
  }

  @media (max-width: 1100px) {
    width: 390px;
  }

  @media (max-width: ${(props) => `calc(${props.theme.screens.tablet} + 40px)`}) {
    width: 315px;
    height: 228px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`;

export const Title = styled.h5`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.6px;
`;

export const Description = styled.h4`
  max-width: 313px;
  margin: 12px 0 34px;
  line-height: normal;
`;

export const Content = styled.div`
  margin-top: 23px;
  padding: 0 12px;
`;

export const Detail = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  
  & > svg {
    min-width: 22px;
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;
