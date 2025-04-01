import styled, { css } from 'styled-components';

export const Icon = styled.i<{
  $name: string;
  $size: number;
  $color?: string;
  $gradient?: string;
  $css?: string;
}>`
  width: ${(props) => `${props.$size}px` || '16px'};
  height: ${(props) => `${props.$size}px` || '16px'};
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.$color || props.theme.colors.text};
  background: ${(props) => props.$gradient};
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-position: center;

  mask-image: ${(props) => `url(./images/${props.$name}.svg)`};
  -webkit-mask-image: ${(props) => `url(./images/${props.$name}.svg)`};

  ${(props) =>
    props.$css &&
    css`
      ${props.$css}
    `}
`;
