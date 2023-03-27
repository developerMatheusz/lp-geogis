import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.small};
    background: ${theme.colors.white};
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
      background: linear-gradient(
          217deg,
          ${theme.colors.blue},
          ${theme.colors.darkBlue} 70.71%
        ),
        linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
      border-radius: 100%;
      padding: 0.5rem;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.secondary};
  `}
`;
