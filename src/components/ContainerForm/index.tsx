import styled, { css } from "styled-components";
import media from "styled-media-query";

export const ContainerForm = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.containerForm};
    ${media.greaterThan("medium")`
      max-width: 468px;
    `}
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`;
