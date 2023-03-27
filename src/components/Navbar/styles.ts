import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: ${theme.spacings.xxsmall};
    ${media.lessThan("medium")`
      padding: ${theme.spacings.xsmall};
    `}
    background: ${theme.colors.white};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
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
      font-size: ${theme.font.sizes.medium};
    `}
    ${media.between("medium", "large")`
      font-size: ${theme.font.sizes.large};
    `}
    ${media.between("small", "large")`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
