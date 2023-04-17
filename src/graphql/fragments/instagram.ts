import { gql } from "@apollo/client";

export const InstagramFragment = gql`
  fragment InstagramFragment on New {
    title
    img {
      data {
        attributes {
          url
        }
      }
    }
    description
    href
  }
`;
