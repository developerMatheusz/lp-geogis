import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.a`
  position: fixed;
  bottom: 0rem;
  right: 0.5rem;
  > img {
    width: 5.5rem;
    ${media.lessThan("medium")`
      width: 5rem;
    `}
  }
  z-index: 3;
`;
