import { ContainerForm } from "@/components/ContainerForm";
import SliderNews from "@/components/SliderNews";
import AboutUs, {
  NavAboutUsProps,
  BodyAboutUsProps
} from "@/components/AboutUs";
import Showcase from "@/components/ShowCase";
import FormFeedback from "@/components/FormFeedback";
import AdditionalInformation, {
  ListInformationsProps
} from "@/components/AdditionalInformation";
import Video from "@/components/Video";
import GeoLocalization from "@/components/GeoLocalization";
import Base from "../Base";
import { BannerProps } from "@/components/Banner";
import { GeoCardProps } from "@/components/GeoCard";
import * as S from "./styles";

export type HomeTemplateProps = {
  banners: BannerProps[];
  news: GeoCardProps[];
  partners: GeoCardProps[];
  itemsNav: NavAboutUsProps;
  itemsBody: BodyAboutUsProps[];
  addInformation: ListInformationsProps[];
};

const Home = ({
  banners,
  news,
  partners,
  itemsNav,
  itemsBody,
  addInformation
}: HomeTemplateProps) => {
  return (
    <Base>
      <SliderNews items={banners} />
      <AboutUs itemsNav={itemsNav} itemsBody={itemsBody} />
      <S.SectionVideo>
        <Video />
      </S.SectionVideo>
      <S.Background>
        <S.SectionNews>
          <Showcase title="INSTAGRAM GEOGIS" news={news} />
        </S.SectionNews>
        <S.SectionNews>
          <Showcase title="GEOGIS NA MÍDIA" news={partners} />
        </S.SectionNews>
      </S.Background>
      <AdditionalInformation items={addInformation} />
      <S.SectionForm>
        <ContainerForm>
          <FormFeedback />
        </ContainerForm>
      </S.SectionForm>
      <GeoLocalization />
    </Base>
  );
};

export default Home;
