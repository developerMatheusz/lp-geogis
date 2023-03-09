import Home, { HomeTemplateProps } from "../pages/home";
import bannersMock from "../pages/home/slider/mock";
import newsMock from "../components/GeoCardSlider/mock";

const Index = (props: HomeTemplateProps) => {
  return <Home {...props} />;
};

export default Index;

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      news: newsMock
    }
  };
}
