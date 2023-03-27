import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const SectionNews = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxsmall};
    > div {
      text-align: center;
      margin-bottom: 5rem;
    }
    background: linear-gradient(
      135deg,
      #a6aec1 0%,
      #a6aec1 50%,
      #6c788e 50%,
      #6c788e 100%
    );
  `}
`;

export const SectionVideo = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
    text-align: center;
    background: ${theme.colors.white};
  `}
`;

export const SectionForm = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xxlarge};
    padding-top: ${theme.spacings.xxlarge};
    background: #424254;
  `}
`;

export const SectionFooter = styled.footer`
  margin-top: 3rem;
`;
