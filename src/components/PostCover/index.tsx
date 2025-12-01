import { ImageWrapper, Img, Mask } from './styled';

type CoverProps = {
  coverURL: string;
  alt: string;
};

export default function PostCover({ coverURL, alt }: CoverProps) {
  return (
    <ImageWrapper>
      <Img src={coverURL} alt={alt} />
      <Mask />
    </ImageWrapper>
  );
}
