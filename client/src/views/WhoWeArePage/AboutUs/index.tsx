import { Icon } from '../../../ui/Icon';
import {
  Flex,
  Section,
  Image,
  Container,
  Info,
  Title,
  Subtitle,
  Description,
  List,
  Li,
  LTitle,
  LDescr,
  StyledButton,
} from './styled';
import content from './content.json';
import { useNavigate } from 'react-router-dom';
import { Route } from '../../../router/routes';

export const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Flex>
          <Info>
            <Title>We’ve got one mission.</Title>
            <Subtitle>To create.</Subtitle>
            <Description>
              <span>
                Welcome to our production studio, where creativity knows no bounds. We are not just a team, we are a
                collective of passionate individuals driven by the relentless pursuit of excellence. From concept to
                execution, we breathe life into ideas, turning imagination into reality. Innovation is at our core, and
                every project is an opportunity to push the boundaries of what's possible. With state-of-the-art
                technology and a commitment to quality, we transform visions into captivating experiences.
                <br />
                <br />
                Join us on a journey where imagination meets craftsmanship, and together, let's bring your ideas to
                life. At our production studio, the only limit is your imagination – let's create something
                extraordinary.
              </span>
            </Description>
          </Info>
          <Image src="./images/man-about-us.webp" alt="Man with camera" />
        </Flex>
        <List>
          {content.map(({ icon, title, size, css, descr }, idx) => (
            <Li key={idx}>
              <Icon
                $name={icon}
                $size={size}
                $gradient="linear-gradient(171deg, #5E45EC 12.22%, #EC75FF 111.38%), #000;"
                $css={css}
              />
              <div>
                <LTitle style={{ lineHeight: `${size}px` }}>{title}</LTitle>
                <LDescr>{descr}</LDescr>
              </div>
            </Li>
          ))}
          <StyledButton type="button" onClick={() => navigate(Route.GetInTouch)}>
            Contact Us
          </StyledButton>
        </List>
      </Container>
    </Section>
  );
};
