import { Link, useNavigate } from 'react-router-dom';

import { Route } from '../../../router/routes';
import { StyledNav, Logo, Menu, StyledNavLink } from './styled';
import { Button } from '../../../ui/Button';
import { Socials } from '../Socials';

const links = [
  {
    label: 'home',
    route: Route.Home,
  },
  {
    label: 'our works',
    route: Route.Works,
  },
  {
    label: 'our studio',
    route: Route.Studio,
  },
  {
    label: 'our services',
    route: Route.Service,
  },
];

type TNavMenuProps = {
  closeMenu: () => void;
  isMenuOpen: boolean;
};

export const NavMenu: React.FC<TNavMenuProps> = ({ closeMenu, isMenuOpen }) => {
  const navigate = useNavigate();

  const redirectToGetInTouch = () => {
    closeMenu();
    navigate(Route.GetInTouch);
  };

  return (
    <StyledNav>
      <Link to={Route.Home}>
        <Logo />
      </Link>
      <Menu $open={isMenuOpen}>
        {links.map(({ label, route }, idx) => (
          <li key={idx} onClick={closeMenu}>
            <StyledNavLink to={route}>
              <span>{label}</span>
            </StyledNavLink>
          </li>
        ))}
      </Menu>
      <Socials isMenuOpen={isMenuOpen} />
      <Button $open={isMenuOpen} onClick={redirectToGetInTouch}>
        contact us
      </Button>
    </StyledNav>
  );
};
