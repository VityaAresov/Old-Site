import styled, { css, keyframes } from 'styled-components';

export const CollageImageAnim = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ImageWrapper = styled.div<{ $animDelay: number; $customSize?: string }>`
  cursor: pointer;
  border-radius: 24px;
  overflow: hidden;
  animation-name: ${CollageImageAnim};
  animation-duration: 700ms;
  animation-delay: ${(props) => (props.$animDelay < 800 ? props.$animDelay + 'ms' : 0)};

  ${(props) => {
    switch (props.$customSize) {
      case 'wide':
        return css`
          grid-column: span 2 / auto;
        `;
      case 'tall':
        return css`
          grid-row: span 2 / auto;
        `;
      default:
        return;
    }
  }}

  @media (max-width: 1225px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

export const Image = styled.img<{ $custom?: string }>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 500ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
