import { NavMenu } from './NavMenu';
import { Container } from '../../ui/Container';
import { useEffect, useState } from 'react';
import { Hamburger } from './NavMenu/Hamburger';
import { AnnouncementBar } from './AnnouncementBar';
import { usePathConstraintUI } from '../../hooks/usePathConstraintUI';
import { Route } from '../../router/routes';
import { defaultTheme } from '../../theme/defaultTheme';
import { StyledHeader } from './styled';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowAnnouncement] = usePathConstraintUI([
    Route.Works,
    Route.Studio,
    Route.Service,
    Route.GetInTouch,
    Route.NotFound,
  ]);
  const [placeAtTop, setPlaceAtTop] = useState(false);

  useEffect(() => {
    const setScrollY = () => {
      const anonceBarHeight: number = parseInt(defaultTheme.sizes.adBarHeightMobile);
      if (window.innerHeight + window.scrollY <= document.body.offsetHeight + anonceBarHeight) {
        setPlaceAtTop(true);
      } else {
        setPlaceAtTop(false);
      }
    };

    window.addEventListener('scroll', setScrollY);
    return () => {
      window.addEventListener('scroll', setScrollY);
    };
  });

  // Prevent scrolling into menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <AnnouncementBar isMenuOpen={isMenuOpen} isShowAnnouncement={isShowAnnouncement} />
      <StyledHeader $open={isMenuOpen} $showAnnounce={isShowAnnouncement} $placeAtTop={placeAtTop}>
        <Container>
          <NavMenu closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
          <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </Container>
      </StyledHeader>
    </>
  );
};
