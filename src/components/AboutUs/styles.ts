import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxlarge};
    background-color: rgba(56, 109, 189, 0.38);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 0.7);
    `}
    ${media.lessThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 0.8);
    `}
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
  > h2 {
    text-align: justify !important;
  }
`;

export const ContainerIcon = styled.div`
  ${({ theme }) => css`
    margin-bottom: 0.9rem;
    max-width: 6.5rem;
    border: 0.3rem solid ${theme.colors.white};
    transition: 0.4s;
    > svg {
      padding: 0.8rem;
      width: 6rem;
      color: ${theme.colors.white};
    }
    &:hover {
      transform: rotate(45deg);
      transition: 0.4s;
      border: 0.3rem solid ${theme.colors.secondary};
      > svg {
        color: ${theme.colors.secondary};
        transform: rotate(-45deg);
        border: 0.3rem solid ${theme.colors.secondary};
      }
    }
    ${media.lessThan("medium")`
      display: block;
      margin: auto;
      margin-bottom: 0.8rem;
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.lightGray};
    text-align: justify !important;
  `}
`;
