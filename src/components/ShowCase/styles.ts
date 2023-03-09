import styled, { css } from "styled-components";
import { Container } from "../Container";
import * as HeadingStyles from "../Heading/styles";
import * as GeoCardStyles from "../GeoCardSlider/styles";
import media from "styled-media-query";

export const Wrapper = styled(Container).attrs({ as: "section" })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${GeoCardStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${GeoCardStyles.Wrapper} {
      ${media.lessThan("huge")`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`;
