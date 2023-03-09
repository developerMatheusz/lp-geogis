import * as S from "./styles";

export type GeoCardProps = {
  title: string;
  img: string;
  description: string;
};

const GeoCard = ({ title, img, description }: GeoCardProps) => {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
      </S.Content>
    </S.Wrapper>
  );
};

export default GeoCard;
