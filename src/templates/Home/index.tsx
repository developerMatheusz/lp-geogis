import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { ContainerForm } from "@/components/ContainerForm";
import Navbar from "@/components/Navbar";
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
import Whatsapp from "@/components/Whatsapp";
import Redirect from "@/components/Redirect";
import VLibra from "@/components/VLibra";
import Video from "@/components/Video";
import GeoLocalization from "@/components/GeoLocalization";
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
    <S.Wrapper>
      <VLibra />
      <Navbar />
      <SliderNews items={banners} />
      <AboutUs itemsNav={itemsNav} itemsBody={itemsBody} />
      <S.SectionVideo>
        <Video />
      </S.SectionVideo>
      <S.SectionNews id="last-news">
        <Showcase title="INSTAGRAM GEOGIS" news={news} />
      </S.SectionNews>
      <S.SectionNews id="last-news">
        <Showcase title="NOSSOS PARCEIROS" news={partners} />
      </S.SectionNews>
      <AdditionalInformation items={addInformation} />
      <S.SectionForm>
        <ContainerForm>
          <FormFeedback />
        </ContainerForm>
      </S.SectionForm>
      <GeoLocalization />
      <Whatsapp />
      <Redirect />
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
};

export default Home;
