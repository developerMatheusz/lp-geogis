import styled, { css } from "styled-components";
import media from "styled-media-query";

export const ContainerForm = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.containerForm};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
    ${media.greaterThan("medium")`
      max-width: 46.8rem;
    `}
  `}
`;
