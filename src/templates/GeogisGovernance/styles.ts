import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Background = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    overflow: hidden;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.08;
      background-image: url(/img/geogis/bg_green_governance.jpg);
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
      ${media.lessThan("medium")`
        background: ${theme.colors.white};
      `}
    }
  `}
`;
