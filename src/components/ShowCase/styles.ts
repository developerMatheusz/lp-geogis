import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Container } from "../Container";
import * as HeadingStyles from "../Heading/styles";
import * as GeoCardStyles from "../GeoCardSlider/styles";

export const Wrapper = styled(Container).attrs({ as: "section" })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${GeoCardStyles.Wrapper}
    ${GeoCardStyles.Wrapper} {
      ${media.lessThan("huge")`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
  `}
`;
