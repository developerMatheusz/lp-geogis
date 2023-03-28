import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Content = styled.div`
  ${({ theme }) => css`
    ${media.lessThan("medium")`
      margin-top: 5rem;
      max-width: 33rem;
    `}
    max-width: ${theme.grid.containerContent};
    position: relative;
    margin: 0 auto;
    margin-top: 10rem;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`;
