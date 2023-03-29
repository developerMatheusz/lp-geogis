import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Content = styled.div`
  ${({ theme }) => css`
    ${media.lessThan("medium")`
      margin-top: 7rem;
      margin-bottom: 4rem;
      max-width: 33rem;
    `}
    max-width: ${theme.grid.containerContent};
    position: relative;
    margin: 0 auto;
    margin-top: 10rem;
    margin-bottom: 4rem;
    img {
      width: 100%;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-bottom: 2rem;
  `}
`;
