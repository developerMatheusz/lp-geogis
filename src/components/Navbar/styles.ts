import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    background-color: rgba(1, 9, 55, 0.6);
    transition: 0.3s;
    &:hover {
      background-color: rgba(1, 9, 55, 0.38);
    }
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan("medium")`
      margin-left: ${theme.spacings.small};
    `}
    margin-left: ${theme.spacings.small};
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.secondary};
        animation: hoverAnimation 0.3s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.xlarge};
    `}
    ${media.between("medium", "large")`
      font-size: ${theme.font.sizes.large};
    `}
    ${media.between("small", "large")`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
