import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > hr {
      margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
      height: 0.1rem;
      background: rgba(181, 181, 181, 0.5);
      border: 0;
      ${media.greaterThan("medium")`
        margin: calc(${theme.spacings.xxlarge} * 2.5) auto ${theme.spacings.xxlarge};
      `}
    }
  `}
`;

export const SectionNews = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxsmall};
    > div {
      text-align: center;
      margin-bottom: 5rem;
    }
    background: ${theme.colors.white};
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

export const SectionForm = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xxlarge};
    padding-top: ${theme.spacings.xxlarge};
    background: ${theme.colors.white};
  `}
`;

export const SectionFooter = styled.footer`
  ${({ theme }) => css`
    padding-top: 2rem;
    margin-top: 3rem;
    background: ${theme.colors.lightGray};
  `}
`;
