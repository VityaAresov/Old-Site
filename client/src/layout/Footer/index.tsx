import { SubscribeForm } from './SubscribeForm';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';
import {
  BottomRow,
  Center,
  Copyright,
  Li,
  Logo,
  Menu,
  StyledLink,
  StyledNav,
  SubButton,
  SubRow,
  Title,
  TowRow,
} from './styled';
import { usePathConstraintUI } from '../../hooks/usePathConstraintUI';
import { Route } from '../../router/routes';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { Socials } from './Socials';

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

export const Footer = () => {
  const [isShowTopRow, IsDisplayUIOnlyOnMobile] = usePathConstraintUI([Route.GetInTouch, Route.Service], [Route.Works]);
  const navigate = useNavigate();

  return (
    <footer>
      <TowRow $show={isShowTopRow} $showOnlyOnMobile={IsDisplayUIOnlyOnMobile}>
        <Container>
          <Center>
            <Icon $name="camera" $size={67} />
            <Title>Follow our company news</Title>
            <SubscribeForm />
          </Center>
        </Container>
      </TowRow>
      <BottomRow>
        <Container>
          <StyledNav>
            <Link to={Route.Home}>
              <Logo />
            </Link>
            <Menu>
              {links.map(({ label, route }, idx) => (
                <Li key={idx}>
                  <StyledLink to={route}>
                    <span>{label}</span>
                  </StyledLink>
                </Li>
              ))}
            </Menu>
            <Button onClick={() => navigate(Route.GetInTouch)}>contact us</Button>
          </StyledNav>
          <SubRow>
            <Copyright>&copy; Viks Production LLC {new Date().getFullYear()}</Copyright>
            <SubButton onClick={() => navigate(Route.GetInTouch)}>contact us</SubButton>
            <Socials />
          </SubRow>
        </Container>
      </BottomRow>
    </footer>
  );
};
