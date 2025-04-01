import { CircleData } from './CircleData';
import { MoreAboutCircle } from './MoreAboutCircle';
import { Container } from '../../../ui/Container';
import { BottomRow, Section, TopRow, Image, Info, ColoredText, Title, Description } from './styled';

const circleData = [
  {
    nums: '15+',
    text: 'employees in our team',
  },
  {
    nums: '2.5m+',
    text: 'Working With<br/>bloggers Audience',
  },
  {
    nums: '50+',
    text: 'Clients We<br/>Work with',
  },
  {
    nums: '6+',
    text: 'years of experience<br/>with our employees',
  },
];

export const WhoWeAre = () => {
  return (
    <Section>
      <Container>
        <TopRow>
          <Info>
            <Title>
              We’re Passionate. We’re Agile.
              <br />
              <ColoredText>We Create.</ColoredText>
            </Title>
            <Description>
              Our production center creates high-quality video content for various platforms. We meticulously work on
              every detail, from concept to editing. An additional strategy is employed to attract attention to your
              videos and the entire marketing aspect. Specializing in crafting 3D models of any complexity, we also
              offer the development of unique websites through our partners.
            </Description>
          </Info>
          <Image $src={'./images/man-who-we-are.webp'} />
        </TopRow>
        <BottomRow>
          {circleData.map(({ nums, text }, idx) => (
            <CircleData key={idx} num={nums} text={text} />
          ))}
          <MoreAboutCircle />
        </BottomRow>
      </Container>
    </Section>
  );
};
