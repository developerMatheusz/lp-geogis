import * as S from "./styles";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
};

const Banner = ({ img, title, subtitle }: BannerProps) => {
  return (
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={title} />
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Caption>
    </S.Wrapper>
  );
};

export default Banner;
