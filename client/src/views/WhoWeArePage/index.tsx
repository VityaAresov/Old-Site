import { Container } from '../../ui/Container';
import { Intro } from '../../components/Intro';
import { Div, Hero, Title } from './styled';
import { AboutUs } from './AboutUs';
import { Divider } from '../../ui/Divider';
import { MeetTheTeam } from './MeetTheTeam';

const WhoWeArePage = () => {
  return (
    <main>
      <Intro title="Who We Are" height="148px" />
      <Hero>
        <Container>
          <Div>
            <Title>
              <p>VIKS Production</p>
              <p>Who We Are</p>
            </Title>
          </Div>
        </Container>
      </Hero>
      <AboutUs />
      <Divider $img="./images/dividers/divider-3.webp" $height={490} $hideOnMobile={true} />
      <MeetTheTeam />
    </main>
  );
};

export default WhoWeArePage;
