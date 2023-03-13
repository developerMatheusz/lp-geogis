import { BannerProps } from "@/components/Banner";
import Footer from "../../components/Footer";
import { Container } from "../../components/Container";
import { ContainerForm } from "../../components/ContainerForm";
import Header from "../../components/Header";
import SliderNews from "../../components/SliderNews";
import * as S from "./styles";
import AboutUs from "../../components/AboutUs";
import { GeoCardProps } from "../../components/GeoCard";
import Showcase from "../../components/ShowCase";
import FormFeedback from "../../components/FormFeedback";
import AdditionalInformation from "@/components/AdditionalInformation";
import Whatsapp from "@/components/Whatsapp";
import Redirect from "@/components/Redirect";

export type HomeTemplateProps = {
  banners: BannerProps[];
  news: GeoCardProps[];
};

const Home = ({ banners, news }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <Header />
      <SliderNews items={banners} />
      <AboutUs />
      <S.SectionNews id="last-news">
        <Showcase title="ÚLTIMAS NOTÍCIAS" news={news} />
      </S.SectionNews>
      <S.SectionForm>
        <ContainerForm>
          <FormFeedback />
        </ContainerForm>
      </S.SectionForm>
      <AdditionalInformation />
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
