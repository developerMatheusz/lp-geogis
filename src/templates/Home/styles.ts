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
      #cacaca 0%,
      #cacaca 50%,
      #8f9a9c 50%,
      #8f9a9c 100%
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
  margin-top: 3rem;
`;
