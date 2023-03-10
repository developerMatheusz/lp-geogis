import { BannerProps } from "@/components/Banner";
import Footer from "../../components/Footer";
import { Container } from "../../components/Container";
import { ContainerForm } from "../../components/ContainerForm";
import Header from "./header";
import SliderNews from "./slider";
import * as S from "./styles";
import AboutUs from "../../components/AboutUs";
import { GeoCardProps } from "../../components/GeoCard";
import Showcase from "../../components/ShowCase";
import FormFeedback from "../../components/FormFeedback";

export type HomeTemplateProps = {
  banners: BannerProps[];
  news: GeoCardProps[];
};

const Home = ({ banners, news }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <Header />
      <Container>
        <S.SectionBanner>
          <SliderNews items={banners} />
        </S.SectionBanner>
      </Container>
      <AboutUs />
      <S.SectionNews>
        <Showcase title="ÚLTIMAS NOTÍCIAS" news={news} />
      </S.SectionNews>
      <S.SectionForm>
        <ContainerForm>
          <FormFeedback />
        </ContainerForm>
      </S.SectionForm>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
};

export default Home;