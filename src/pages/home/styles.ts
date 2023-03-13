import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  background-image: url(/img/testimonial-bg.jpg);
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
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xxsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: rgba(56, 109, 189, 0.38);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 0.5);
    `}
    ${media.lessThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 0.5);
    `}
  `}
`;

export const SectionForm = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.medium};
    background-color: rgba(56, 109, 189, 0.38);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 0.5);
    `}
    ${media.lessThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 0.5);
    `}
  `}
`;

export const SectionFooter = styled.footer`
  margin-top: 2rem;
`;
