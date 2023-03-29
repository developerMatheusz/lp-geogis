import styled, { css } from "styled-components";
import media from "styled-media-query";

export const SectionNews = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxsmall};
    > div {
      text-align: center;
      margin-bottom: 5rem;
    }
    position: relative;
    z-index: 2;
  `}
`;

export const SectionVideo = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
    text-align: center;
    background: linear-gradient(
      135deg,
      #0a5483 0%,
      #0a5483 50%,
      #02416d 50%,
      #02416d 100%
    );
  `}
`;

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
      opacity: 0.2;
      background-image: url(/img/bg_green_section.jpg);
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
      ${media.lessThan("medium")`
        background: ${theme.colors.white};
      `}
    }
  `}
`;

export const SectionForm = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xxlarge};
    padding-top: ${theme.spacings.xxlarge};
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
      opacity: 0.2;
      background-image: url(/img/bg_green_feedback.jpg);
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
      ${media.lessThan("medium")`
        background: ${theme.colors.white};
      `}
    }
  `}
`;
