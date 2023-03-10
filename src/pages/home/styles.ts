import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > Header {
      border-bottom: 0.2rem solid ${theme.colors.white};
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
    border-bottom: 0.2rem solid ${theme.colors.white};
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: rgba(56, 109, 189, 0.38);
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 16%, 100% 5%, 100% 100%, 0 100%);
    `}
    ${media.lessThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 20%, 100% 16%, 100% 100%, 0 100%);
    `}
  `}
`;

export const SectionForm = styled.div`
  ${({ theme }) => css`
    border-bottom: 0.2rem solid ${theme.colors.white};
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.medium};
    background-color: rgba(56, 109, 189, 0.38);
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 1);
      clip-path: polygon(0 5%, 100% 18%, 100% 100%, 0 100%);
    `}
    ${media.lessThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 20%, 100% 16%, 100% 100%, 0 100%);
    `}
  `}
`;

export const SectionFooter = styled.footer`
  margin-top: 2rem;
`;
