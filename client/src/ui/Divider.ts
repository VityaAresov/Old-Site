import styled from 'styled-components';

export const Divider = styled.div<{ $img: string; $height: number; $hideOnMobile?: boolean }>`
  width: 100%;
  height: ${(props) => props.$height + 'px'};
  background: center / cover no-repeat url(${(props) => props.$img});

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: ${(props) => props.$hideOnMobile && 'none'};
    height: 228px;
  }
`;
