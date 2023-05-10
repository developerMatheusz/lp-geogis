import * as S from "./styles";
import Image from "next/legacy/image";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
};

const Banner = ({ img, title, subtitle }: BannerProps) => {
  return (
    <S.Wrapper id="banner">
      <S.ImageWrapper>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageWrapper>
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Caption>
    </S.Wrapper>
  );
};

export default Banner;
