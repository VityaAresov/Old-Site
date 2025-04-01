import { Container } from '../../../ui/Container';
import { Section, Title, Subtitle, List, Card, Name, Image } from './styled';
import content from './content.json';
import { defaultTheme } from '../../../theme/defaultTheme';

type TMeetTheTeamContent = {
  name: string;
  position: string;
  src: string;
  fullName: string;
};

export const MeetTheTeam = () => {
  const maxWidth = defaultTheme.screens.mobile;
  const isMobile = window.matchMedia(`(max-width: ${maxWidth})`).matches;

  const swapCards = (contentArr: TMeetTheTeamContent[]) => {
    if (isMobile) {
      const arr = [...contentArr];
      const tmp = arr[0];
      arr[0] = arr[1];
      arr[1] = tmp;
      return arr;
    }
    return contentArr;
  };

  return (
    <Section>
      <Container>
        <Title>
          Meet The <span>Team</span>
        </Title>
        <div>
          <Subtitle>We are the three key elements that help connect you with the world of media and content.</Subtitle>
        </div>
        <List>
          {swapCards(content).map(({ name, src, fullName, position }) => (
            <Card key={name}>
              <Name>
                {name}
                <span>.</span>
              </Name>
              <Image $src={src} data-name={fullName} data-pos={position} />
            </Card>
          ))}
        </List>
      </Container>
    </Section>
  );
};
