import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-top: ${theme.spacings.xxlarge};
    padding: ${theme.spacings.small};
    padding-top: calc(${theme.spacings.xxlarge} * 1);
    background-color: rgba(56, 109, 189, 0.38);
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
    ${media.lessThan("medium")`
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      > div {
        > h2 {
          font-size: ${theme.font.sizes.xxlarge};
        }
        > p {
          font-size: ${theme.font.sizes.large};
        }
      }
    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    > svg {
      width: 6rem;
      color: ${theme.colors.white};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
  `}
`;
