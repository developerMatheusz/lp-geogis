import Home, { HomeTemplateProps } from "@/templates/Home";
import bannersMock from "@/components/SliderNews/banners";
import newsMock from "@/components/GeoCardSlider/news";
import partnersMock from "@/components/GeoCardSlider/partners";
import itemsNavMock from "@/components/AboutUs/navmock";
import itemsBodyMock from "@/components/AboutUs/bodymock";
import addInformationMock from "@/components/AdditionalInformation/mock";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      news: newsMock,
      partners: partnersMock,
      itemsNav: itemsNavMock,
      itemsBody: itemsBodyMock,
      addInformation: addInformationMock
    }
  };
}
