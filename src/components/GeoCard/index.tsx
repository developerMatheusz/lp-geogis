import * as S from "./styles";

export type GeoCardProps = {
  title: string;
  img: string;
  description: string;
  href?: string;
};

const GeoCard = ({ title, img, description, href }: GeoCardProps) => {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <a href={href} target="_blank" rel="noreferrer">
          <img src={img} alt={title} />
        </a>
      </S.ImageBox>
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
