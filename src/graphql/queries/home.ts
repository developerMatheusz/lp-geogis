import { gql } from "@apollo/client";
import { BannerFragment } from "../fragments/banner";
import { InstagramFragment } from "../fragments/instagram";
import { GeogisMediaFragment } from "../fragments/geogis-media";

export const QUERY_HOME = gql`
  query {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newsInstagram: news {
      data {
        attributes {
          ...InstagramFragment
        }
      }
    }

    newsGeogis: geogisMedias {
      data {
        attributes {
          ...GeogisMediaFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${InstagramFragment}
  ${GeogisMediaFragment}
`;
