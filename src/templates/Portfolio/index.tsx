import AboutUs, {
  BodyAboutUsProps,
  NavAboutUsProps
} from "@/components/AboutUs";
import AdditionalInformation, {
  ListInformationsProps
} from "@/components/AdditionalInformation";
import Banner from "@/components/Banner";
import { GeoCardProps } from "@/components/GeoCard";
import GeoLocalization from "@/components/GeoLocalization";
import Showcase from "@/components/ShowCase";
import Base from "../Base";
import * as S from "./styles";

export type PortfolioProps = {
  partners: GeoCardProps[];
  itemsNav: NavAboutUsProps;
  itemsBody: BodyAboutUsProps[];
  addInformation: ListInformationsProps[];
};

const Portfolio = ({
  partners,
  itemsNav,
  itemsBody,
  addInformation
}: PortfolioProps) => {
  return (
    <Base>
      <Banner
        img="/img/geogis/bg_drone.jpg"
        title="Geoprocessamento na agricultura"
        subtitle="Conhecer o local traz mais confiabilidade sobre as melhores práticas de agropecuária, auxiliando no seu melhor aproveitamento e consequentemente maior produtividade."
      />
      <AboutUs itemsNav={itemsNav} itemsBody={itemsBody} />
      <AdditionalInformation items={addInformation} />
      <S.SectionNews>
        <Showcase title="GEOGIS NA MÍDIA" news={partners} />
      </S.SectionNews>
      <GeoLocalization />
    </Base>
  );
};

export default Portfolio;
