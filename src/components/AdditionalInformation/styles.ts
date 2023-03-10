import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: rgba(56, 109, 189, 0.38);
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 1);
      clip-path: polygon(0 20%, 100% 6%, 100% 100%, 0 100%);
    `}
    ${media.between("medium", "large")`
      padding-top: calc(${theme.spacings.xxlarge} * 5);
      clip-path: polygon(0 14%, 100% 10%, 100% 100%, 0 
        100%);
    `}
    ${media.lessThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 1);
      clip-path: polygon(0 20%, 100% 9%, 100% 100%, 0 
        100%);
    `}
    border-bottom: 0.4rem solid ${theme.colors.white};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.large};
    ${media.greaterThan("medium")`
      grid-template-columns: repeat(3, 1fr);
    `}
    ${media.between("medium", "large")`
      grid-template-columns: repeat(2, 1fr);
    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
    > svg {
      width: 6rem;
      color: ${theme.colors.white};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.lightGray};
    ${media.greaterThan("medium")`
      max-width: 30rem;
    `}
    word-break: break-all;
  `}
`;