import { Content, Description, Label, PlayButton, StyledHero, Subtitle, Title, WatchVideo } from './styled';
import { Container } from '../../../ui/Container';
import { useState } from 'react';
import Modal from '../../../layout/Modal';
import VideoPlayer from './VideoPlayer';

export const Hero = () => {
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false);

  return (
    <StyledHero>
      <Container $page>
        <Content>
          <Subtitle>we create</Subtitle>
          <Title>Commercials</Title>
          <Description>
            We are ready to bring your most intricate ideas in the realm of the internet and media space to life,
            providing comprehensive professional support from concept to implementation.
          </Description>
          <WatchVideo>
            <PlayButton type="button" onClick={() => setIsOpenVideoModal(true)} />
            <Label>Watch our video</Label>
          </WatchVideo>
          <Modal isOpen={isOpenVideoModal} handleClose={() => setIsOpenVideoModal(false)}>
            <VideoPlayer />
          </Modal>
        </Content>
      </Container>
    </StyledHero>
  );
};
