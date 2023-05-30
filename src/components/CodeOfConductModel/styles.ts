import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Content = styled.div`
  ${({ theme }) => css`
    ${media.lessThan("medium")`
      margin-top: 7rem;
      margin-bottom: 7rem;
      max-width: 33rem;
    `}
    max-width: ${theme.grid.containerContent};
    position: relative;
    margin: 0 auto;
    margin-top: 10rem;
    margin-bottom: 10rem;
    img {
      width: 100%;
    }
    h2 {
      margin-top: 3rem;
    }
    position: relative;
    z-index: 2;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    margin-bottom: 2rem;
    font-size: ${theme.font.sizes.xlarge};
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.medium};
    `}
    ol {
      li {
        list-style-type: none;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        font-size: ${theme.font.sizes.xlarge};
        ${media.lessThan("medium")`
          font-size: ${theme.font.sizes.medium};
        `}
        font-weight: bold;
      }
    }
  `}
`;
