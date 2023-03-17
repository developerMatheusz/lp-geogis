import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-image: url(/img/testimonial-bg.png);
`;

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    padding-top: calc(${theme.spacings.xxlarge} * 1.2);
    padding-bottom: ${theme.spacings.xxsmall};
    background-color: rgba(56, 109, 189, 0.38);
    > div {
      text-align: center;
      margin-bottom: 5rem;
    }
  `}
`;

export const SectionForm = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxlarge};
    padding-top: calc(${theme.spacings.xxlarge} * 0.8);
    background-color: rgba(56, 109, 189, 0.38);
  `}
`;

export const SectionFooter = styled.footer`
  margin-top: 3rem;
`;
