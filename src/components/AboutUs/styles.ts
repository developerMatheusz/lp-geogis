import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxlarge};
    ${media.lessThan("medium")`
      background: ${theme.colors.white};
    `}
    overflow: hidden;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.2;
      background-image: url(/img/bg_green_about_us.jpg);
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
      ${media.lessThan("medium")`
        background: ${theme.colors.white};
      `}
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.grid.gutter};
    ${media.greaterThan("medium")`
      grid-template-columns: repeat(3, 1fr);
    `}
    ${media.between("medium", "large")`
      grid-template-columns: repeat(2, 1fr);
    `}
    position: relative;
    z-index: 2;
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    &:hover {
      > ${ContainerIcon} {
        transform: rotate(45deg);
        > svg {
          transform: rotate(-45deg);
          border: 0.3rem solid ${theme.colors.secondary};
        }
      }
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: 1rem;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const ContainerIcon = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    max-width: 6.5rem;
    border: 0.3rem solid ${theme.colors.secondary};
    transition: 0.4s;
    > svg {
      padding: 0.8rem;
      width: 6rem;
      color: ${theme.colors.secondary};
    }
  `}
`;
