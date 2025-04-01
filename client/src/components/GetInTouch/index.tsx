import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';
import { ContactForm } from '../ContactForm';
import {
  CDescription,
  CSubtitle,
  CTitle,
  Circle,
  Contact,
  DSubtitle,
  DTitle,
  Detail,
  Details,
  Flex,
  FormContainer,
  HideOnTablet,
  MobTitle,
} from './styled';

const details = [
  {
    iconName: 'phone',
    iconSize: 28,
    title: 'call us',
    subtitle: '+1 954 774 5305',
  },
  {
    iconName: 'letter',
    iconSize: 33.6,
    title: 'email us',
    subtitle: 'info@viksproduction.com',
  },
];

type TGetInTouchProps = {
  hide?: boolean;
};

export const GetInTouch: React.FC<TGetInTouchProps> = ({ hide }) => {
  return (
    <Contact>
      <Container>
        <Flex>
          <HideOnTablet $hide={hide}>
            <CTitle>Ready to create?</CTitle>
            <CSubtitle>Get in Touch</CSubtitle>
            <CDescription>Сontact us and we will discuss the best conditions for our cooperation.</CDescription>
            <Details>
              {details.map(({ iconName, iconSize, title, subtitle }, idx) => (
                <Detail key={idx}>
                  <Circle>
                    <Icon
                      $name={iconName}
                      $size={iconSize}
                      $gradient="linear-gradient(171deg, #5E45EC 12.22%, #EC75FF 111.38%), #000;"
                    />
                  </Circle>
                  <div>
                    <DTitle>{title}</DTitle>
                    <DSubtitle>{subtitle}</DSubtitle>
                  </div>
                </Detail>
              ))}
            </Details>
          </HideOnTablet>
          <MobTitle>Get in touch</MobTitle>
          <FormContainer>
            <ContactForm notModal={true} />
          </FormContainer>
        </Flex>
      </Container>
    </Contact>
  );
};
