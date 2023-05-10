import * as S from "./styles";
import Image from "next/legacy/image";

export type GeoCardProps = {
  title: string;
  img: string;
  description: string;
  href?: string | undefined;
};

const GeoCard = ({ title, img, description, href }: GeoCardProps) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <a href={href} target="_blank" rel="noreferrer">
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </a>
      </S.ImageWrapper>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <hr />
          <S.Description>{description}</S.Description>
        </S.Info>
      </S.Content>
    </S.Wrapper>
  );
};

export default GeoCard;
