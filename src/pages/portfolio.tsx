import Portfolio, { PortfolioProps } from "@/templates/Portfolio";
import itemsNavMock from "@/components/AboutUs/navmock";
import itemsBodyMock from "@/components/AboutUs/bodymock";
import addInformationMock from "@/components/AdditionalInformation/mock";
import { initializeApollo } from "@/utils/apollo";
import { QUERY_HOME } from "@/graphql/queries/home";
import { newsGeogisMapper } from "@/utils/mapper";

export default function Index(props: PortfolioProps) {
  return <Portfolio {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { newsGeogis }
  } = await apolloClient.query({
    query: QUERY_HOME,
    fetchPolicy: "no-cache"
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
