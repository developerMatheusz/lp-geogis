import Portifolio, { PortifolioProps } from "@/templates/Portifolio";
import partnersMock from "@/components/GeoCardSlider/partners";
import itemsNavMock from "@/components/AboutUs/navmock";
import itemsBodyMock from "@/components/AboutUs/bodymock";
import addInformationMock from "@/components/AdditionalInformation/mock";

export default function Index(props: PortifolioProps) {
  return <Portifolio {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      partners: partnersMock,
      itemsNav: itemsNavMock,
      itemsBody: itemsBodyMock,
      addInformation: addInformationMock
    }
  };
}
