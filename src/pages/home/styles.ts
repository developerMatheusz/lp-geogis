import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > Header {
      opacity: 0.65;
      border-bottom: 0.15rem solid ${theme.colors.white};
      box-shadow: 0.1rem 0.1rem 0.1rem ${theme.colors.lightGray};
      &:hover {
        opacity: 1;
        box-shadow: none;
        transition: 0.5s;
      }
    }
    background-image: url(/img/testimonial-bg.jpg);
  `}
`;

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);
    ${media.greaterThan("medium")`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`;

export const SectionNews = styled.div`
  ${({ theme }) => css`
    border-bottom: 0.4rem solid ${theme.colors.white};
    opacity: 0.7;
    margin-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: #294380;
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 3);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
    ${media.lessThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 6);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`;

export const SectionFooter = styled.footer`
  margin-top: 2rem;
`;
