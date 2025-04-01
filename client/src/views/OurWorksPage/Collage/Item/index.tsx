import { ImageWrapper, Image } from './styled';

type TCollageItem = {
  idx: number;
  imageUrl: string;
  siteUrl?: string;
  customSize?: string;
  expand: boolean;
  setSlideIndex: (n: number) => void;
  setOpenCollageModel: (i: boolean) => void;
};

export const Item: React.FC<TCollageItem> = ({
  imageUrl,
  siteUrl,
  customSize,
  idx,
  expand,
  setOpenCollageModel,
  setSlideIndex,
}) => {
  const expandedProps = expand && {
    as: 'a',
    href: siteUrl,
    target: '_blank',
    rel: 'noreferrer',
    onClick: () => void undefined,
  };

  return (
    <ImageWrapper
      onClick={() => {
        setSlideIndex(idx);
        setOpenCollageModel(true);
      }}
      $customSize={customSize}
      $animDelay={idx * 100}
      {...expandedProps}
    >
      <Image src={imageUrl} alt={siteUrl || imageUrl} />
    </ImageWrapper>
  );
};
