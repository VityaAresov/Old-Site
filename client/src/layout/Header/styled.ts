import styled from 'styled-components';

export const StyledHeader = styled.header<{
  $open: boolean;
  $showAnnounce: boolean;
  $placeAtTop: boolean;
}>`
  padding-top: 58px;
  padding-bottom: 58px;
  width: 100%;
  position: absolute;
  top: ${(props) => (props.$showAnnounce ? props.theme.sizes.adBarHeight : 0)}; // 0 - without AdBar
  left: 0;
  z-index: 100;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    transition: top 150ms ease-in;
    padding-top: 28px;
    padding-bottom: 28px;
    height: 93px;
    height: ${(props) => (props.$open ? 'calc(100vh + 1px)' : 'auto')};
    top: ${(props) =>
      props.$showAnnounce ? (props.$open || props.$placeAtTop ? '60px' : props.theme.sizes.adBarHeightMobile) : 0};
    background-image: url('./images/background.png');
    background-color: ${(props) => props.theme.colors.background};

    &::before {
      content: '';
      display: ${(props) => (props.$open ? 'block' : 'none')};
      width: 270px;
      height: 280px;
      background: no-repeat url('./images/menu-clip.png');
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    position: sticky;
    top: ${(props) =>
      props.$showAnnounce ? (props.$open || props.$placeAtTop ? '-1px' : props.theme.sizes.adBarHeightMobile) : 0};
  }
`;
