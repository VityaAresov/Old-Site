import { useNavigate } from 'react-router-dom';
import { Route } from '../../router/routes';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';
import { ServiceItem, TServiceItemProps } from './ServiceItem';
import { Section, Title, List, LastItem, StyledButton, P, MobTitle, MobSubtitle, ServiceButton } from './styled';

import data from './content.json';

type TOurServicesProps = {
  onPage?: boolean;
};

export const OurServices: React.FC<TOurServicesProps> = ({ onPage }) => {
  const navigate = useNavigate();

  return (
    <Section $onPage={onPage}>
      <Container>
        <Title>Our services</Title>
        <MobTitle $onPage={onPage}>Services</MobTitle>
        <MobSubtitle $onPage={onPage}>Let’s Create</MobSubtitle>
        <List>
          {(data as TServiceItemProps[]).map((item, idx) => (
            <ServiceItem key={idx} {...item} />
          ))}
          <LastItem to={Route.Works}>
            <P>See our works</P>
            <StyledButton>
              <Icon $name="arrow" $size={24} $color="#AD60F6" />
            </StyledButton>
          </LastItem>
          <ServiceButton type="button" onClick={() => navigate(Route.Works)}>
            See our works
          </ServiceButton>
        </List>
      </Container>
    </Section>
  );
};
