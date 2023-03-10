import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: rgba(56, 109, 189, 0.38);
    &:hover {
      background-color: rgba(56, 109, 189, 0.58);
    }
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 2.5);
      clip-path: polygon(0 5%, 100% 10%, 100% 100%, 0 100%);
    `}
    ${media.between("medium", "large")`
      padding-top: calc(${theme.spacings.xxlarge} * 5);
      clip-path: polygon(0 10%, 100% 12%, 100% 100%, 0 
      100%);
    `}
    ${media.lessThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 5);
      clip-path: polygon(0 10%, 100% 11%, 100% 100%, 0 100%);
    `}
    border-bottom: 0.2rem solid ${theme.colors.white};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.xxsmall};
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
  `}
`;

export const ContainerIcon = styled.div`
  ${({ theme }) => css`
    max-width: 6.5rem;
    border: 0.3rem solid ${theme.colors.secondary};
    > svg {
      width: 6rem;
      color: ${theme.colors.white};
    }
    transition: 0.4s;
    &:hover {
      transform: rotate(45deg);
      transition: 0.4s;
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
