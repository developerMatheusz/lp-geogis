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
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    flex: 1 0 auto;
  `}
`;

export const SectionFooter = styled.footer`
  ${({ theme }) => css`
    padding-top: 2rem;
    margin-top: 3rem;
    background: ${theme.colors.lightGray};
  `}
`;
