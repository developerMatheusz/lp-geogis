import styled, { css } from "styled-components";
import media from "styled-media-query";
import { GeoCardSliderProps } from ".";

type WrapperProps = Pick<GeoCardSliderProps, "color">;

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
      transition: 0.3s;
      &:hover {
        color: ${theme.colors.secondary};
        transition: 0.3s;
      }
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
    ${media.lessThan("huge")`
      overflow-x: hidden;
    `}
    ${media.greaterThan("large")`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}
  `}
`;
