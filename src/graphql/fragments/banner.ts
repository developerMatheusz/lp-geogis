import { gql } from "@apollo/client";

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    img {
      data {
        attributes {
          url
        }
      }
    }
    title
    subtitle
  }
`;
