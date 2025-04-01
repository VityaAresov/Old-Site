import styled from 'styled-components';
import { Container } from '../../ui/Container';

const IntroBlock = styled.section`
  display: none;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    linear-gradient(171deg, #5e45ec 12.22%, #ec75ff 111.38%), #fff;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: 800;
  letter-spacing: -0.96px;
`;

const AlignBottom = styled.div<{ $h: string }>`
  padding-bottom: 22px;
  height: ${(props) => props.$h};
  display: flex;
  align-items: flex-end;
`;

type TIntroProps = {
  title: string;
  height: string;
};

export const Intro: React.FC<TIntroProps> = ({ title, height }) => {
  return (
    <IntroBlock>
      <Container>
        <AlignBottom $h={height}>
          <Title>{title}</Title>
        </AlignBottom>
      </Container>
    </IntroBlock>
  );
};
