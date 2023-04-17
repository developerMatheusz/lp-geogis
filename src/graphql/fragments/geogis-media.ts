import { gql } from "@apollo/client";

export const GeogisMediaFragment = gql`
  fragment GeogisMediaFragment on GeogisMedia {
    title
    img {
      data {
        attributes {
          url
        }
      }
    }
    description
  }
`;
