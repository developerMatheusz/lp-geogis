import Portifolio, { PortifolioProps } from "@/templates/Portifolio";
import itemsNavMock from "@/components/AboutUs/navmock";
import itemsBodyMock from "@/components/AboutUs/bodymock";
import addInformationMock from "@/components/AdditionalInformation/mock";
import { initializeApollo } from "@/utils/apollo";
import { QUERY_HOME } from "@/graphql/queries/home";
import { newsGeogisMapper } from "@/utils/mapper";

export default function Index(props: PortifolioProps) {
  return <Portifolio {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { newsGeogis }
  } = await apolloClient.query({
    query: QUERY_HOME
  });

  const geogis = newsGeogis.data;

  return {
    props: {
      revalidate: 60,
      partners: newsGeogisMapper(geogis),
      itemsNav: itemsNavMock,
      itemsBody: itemsBodyMock,
      addInformation: addInformationMock
    }
  };
}
