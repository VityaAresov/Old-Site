import { useEffect, useRef, useState } from 'react';
import { Center } from '../../../ui/Center';
import { Container } from '../../../ui/Container';
import { Tabs } from '../Tabs/tabs.enum';
import {
  GridCollage,
  NoContent,
  LoadButton,
  Section,
  CarouselWrapper,
  FullScreenImage,
  LeftControls,
  RightControls,
} from './styled';
import Modal from '../../../layout/Modal';
import Carousel from 'nuka-carousel';
import { Icon } from '../../../ui/Icon';
import { Item } from './Item';
import { Spinner } from '../../../ui/Spinner';

type TCollageProps = {
  currentTab: Tabs;
};

type TCollageData = {
  imageUrl: string;
  siteUrl?: string;
  customSize?: string;
}

const IMG_PER_PAGE: number = 9;

export const Collage: React.FC<TCollageProps> = ({ currentTab }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [imgAmountToShow, setImgAmountToShow] = useState<number>(() => IMG_PER_PAGE * currentPage);
  const [openCollageModel, setOpenCollageModel] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [content, setContent] = useState<any>();
  const prevTabRef = useRef<Tabs>(currentTab);

  useEffect(() => {
    fetch("./data/collage.json")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((e) => console.log('Failed to upload collage data: ', e));
  }, [])

  useEffect(() => {
    if (prevTabRef.current !== currentTab) {
      setCurrentPage(1);
      prevTabRef.current = currentTab;
    }
  }, [currentTab]);

  useEffect(() => setImgAmountToShow(IMG_PER_PAGE * currentPage), [currentPage]);

  let contentData = [] as TCollageData[];
  if (content) {
    contentData = content[currentTab].slice(0, imgAmountToShow);
  }

  if (!content) {
    return <NoContent><Spinner /></NoContent>;
  }

  if (!content[currentTab].length) {
    return <NoContent>Coming soon...</NoContent>;
  }

  return (
    <>
      <Section>
        <Container>
          <GridCollage>
            {contentData.map(({ imageUrl, siteUrl, customSize }, idx) => (
              <Item
                key={idx}
                imageUrl={imageUrl}
                siteUrl={siteUrl}
                customSize={customSize}
                idx={idx}
                setSlideIndex={setSlideIndex}
                setOpenCollageModel={setOpenCollageModel}
                expand={currentTab === Tabs.WebsiteCreation}
              />
            ))}
          </GridCollage>
          <Center>
            <LoadButton $hide={contentData.length < imgAmountToShow} onClick={() => setCurrentPage((prev) => prev + 1)}>
              See more
            </LoadButton>
          </Center>
        </Container>
      </Section>

      <Modal isOpen={openCollageModel} handleClose={() => setOpenCollageModel(false)}>
        <CarouselWrapper>
          <Carousel
            slideIndex={slideIndex}
            renderCenterLeftControls={({ previousSlide }) => (
              <LeftControls onClick={previousSlide}>
                <Icon $name="arrow" $size={18} $color="#AD60F6" />
              </LeftControls>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <RightControls onClick={nextSlide}>
                <Icon $name="arrow" $size={18} $color="#AD60F6" />
              </RightControls>
            )}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: '#AD60F6',
              },
            }}
          >
            {(content[currentTab] as TCollageData[]).map(({ imageUrl }, idx) => (
              <FullScreenImage src={imageUrl} key={idx} width={300} height={250} />
            ))}
          </Carousel>
        </CarouselWrapper>
      </Modal>
    </>
  );
};
