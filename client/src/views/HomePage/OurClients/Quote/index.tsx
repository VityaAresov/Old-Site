import styled from 'styled-components';
import { Icon } from '../../../../ui/Icon';

const Root = styled.div`
  height: 415px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    height: auto;
  }
`;

const Text = styled.p`
  max-width: 433px;
  line-height: 186.09%;
  text-align: center;
  margin: 36px 0 45px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    max-width: 335px;
    font-size: 0.875em;
    line-height: 142.857%;
    margin: 16px 0 24px;
  }
`;

const Name = styled.p`
  text-align: center;
  font-weight: 700;
  line-height: 186.09%;
  margin-bottom: 18px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 5px;
    line-height: normal;
  }
`;

const Position = styled.p`
  max-width: 161px;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  line-height: 111.09%;
  letter-spacing: 1px;
  margin-bottom: 47px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    max-width: 100%;
    line-height: normal;
    margin-bottom: 33px;
  }
`;

const Mobile = styled.div`
  display: none;
  text-align: center;
  margin-bottom: 18px;

  & :first-child {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 800;
  }

  & :last-child {
    color: ${(props) => props.theme.colors.main};
    font-size: 2em;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.96px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: block;
  }
`;

type TQuoteProps = {
  text: string;
  name: string;
  position: string;
};

export const Quote: React.FC<TQuoteProps> = ({ text, name, position }) => {
  return (
    <Root>
      <Mobile>
        <p>Our Clients</p>
        <p>Say</p>
      </Mobile>
      <Icon $name="quotes" $size={89} $gradient="linear-gradient(171deg, #5E45EC 12.22%, #EC75FF 111.38%), #000;" />
      <Text>{text}</Text>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Root>
  );
};
