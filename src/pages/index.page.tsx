import Home, { HomeTemplateProps } from "@/pages/home";
import bannersMock from "@/components/SliderNews/banners";
import newsMock from "@/components/GeoCardSlider/news";
import partnersMock from "@/components/GeoCardSlider/partners";

const Index = (props: HomeTemplateProps) => {
  return <Home {...props} />;
};

export default Index;

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      news: newsMock,
      partners: partnersMock
    }
  };
}
