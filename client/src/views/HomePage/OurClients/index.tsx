import Carousel from 'nuka-carousel';
import { Container } from '../../../ui/Container';
import { Icon } from '../../../ui/Icon';
import { Grid, Images, Image, Section, LeftControls, RightControls, CarouselWrapper } from './styled';
import { Quote } from './Quote';
import content from './content.json';

export const OurClients = () => {
  return (
    <Section>
      <Container>
        <Grid>
          <Images>
            <Image height={574} src="./images/our-clients-1.png" alt="Our client" />
            <Image height={482} src="./images/our-clients-2.png" alt="Our client" />
          </Images>
          <CarouselWrapper>
            <Carousel
              wrapAround
              renderCenterLeftControls={({ previousSlide }) => (
                <LeftControls onClick={previousSlide}>
                  <Icon $name="arrow" $size={18} />
                </LeftControls>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <RightControls onClick={nextSlide}>
                  <Icon $name="arrow" $size={18} />
                </RightControls>
              )}
              defaultControlsConfig={{
                pagingDotsContainerClassName: 'slider-dots',
              }}
            >
              {content.map((data, idx) => (
                <Quote key={idx} {...data} />
              ))}
            </Carousel>
          </CarouselWrapper>
        </Grid>
      </Container>
    </Section>
  );
};
