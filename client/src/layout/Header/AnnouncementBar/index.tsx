import styled from 'styled-components';

const Bar = styled.div<{ $show: boolean; $open: boolean }>`
  display: ${(props) => (props.$show ? (props.$open ? 'none' : 'block') : 'none')};
  height: ${(props) => props.theme.sizes.adBarHeight};
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
  z-index: 99;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    height: ${(props) => props.theme.sizes.adBarHeightMobile};
  }
`;

const Link = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3em;
  text-align: center;
  font-weight: 900;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    max-width: 325px;
    font-size: 1em;
  }
`;

type TAnnouncementBarProps = {
  isMenuOpen: boolean;
  isShowAnnouncement: boolean;
};

export const AnnouncementBar: React.FC<TAnnouncementBarProps> = ({ isMenuOpen, isShowAnnouncement }) => {
  const redirectTo = 'https://instagram.com/viks.production/';

  return (
    <Bar $open={isMenuOpen} $show={isShowAnnouncement}>
      <Link href={redirectTo} target="_blank" rel="noreferrer">
        <Content>Subscribe to our Instagram and get a 10% discount!</Content>
      </Link>
    </Bar>
  );
};
