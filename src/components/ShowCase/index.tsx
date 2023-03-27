import Heading from "../Heading";
import GeoCardSlider from "../GeoCardSlider";
import { GeoCardProps } from "../GeoCard";
import * as S from "./styles";

export type ShowcaseProps = {
  title?: string;
  news?: GeoCardProps[];
};

const Showcase = ({ title, news }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading color="white" lineBottom lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!news && <GeoCardSlider items={news} />}
  </S.Wrapper>
);

export default Showcase;
