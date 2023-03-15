import styled from "styled-components";
import { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      padding: ${theme.spacings.xxsmall};
      li {
        background: white;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.secondary};
        }
        &:hover {
          background: ${theme.colors.green};
          transition: 0.3s;
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      flex: 1 0 auto;
      height: 100%;
    }
    box-shadow: 0.1rem ${theme.colors.lightGray};
    ${media.lessThan("huge")`
      overflow-x: hidden;
    `}
  `}
`;
