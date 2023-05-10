import Home, { HomeTemplateProps } from "@/templates/Home";
import itemsNavMock from "@/components/AboutUs/navmock";
import itemsBodyMock from "@/components/AboutUs/bodymock";
import addInformationMock from "@/components/AdditionalInformation/mock";
import { initializeApollo } from "@/utils/apollo";
import { QUERY_HOME } from "../graphql/queries/home";
import {
  bannerMapper,
  newsGeogisMapper,
  newsInstagramMapper
} from "@/utils/mapper";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { banners, newsInstagram, newsGeogis }
  } = await apolloClient.query({
    query: QUERY_HOME
  });

  const banners_ = banners.data;
  const instagram = newsInstagram.data;
  const geogis = newsGeogis.data;

  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners_),
      news: newsInstagramMapper(instagram),
      partners: newsGeogisMapper(geogis),
      itemsNav: itemsNavMock,
      itemsBody: itemsBodyMock,
      addInformation: addInformationMock
    }
  };
}
