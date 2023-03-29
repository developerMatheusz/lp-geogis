import styled, { css } from "styled-components";
import media from "styled-media-query";

type MenuFullProps = {
  isOpen: boolean;
};

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: ${theme.spacings.xxsmall};
    ${media.lessThan("medium")`
      > div {
        img {
          position: relative;
          margin-right: 25rem;
        }
      }
    `}
    background: ${theme.colors.white};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0,
      rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? "all" : "none"};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${MenuLink} {
      color: ${theme.colors.secondary};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
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
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
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
      font-size: ${theme.font.sizes.xsmall};
      margin: 0.6rem;
    `}
    ${media.between("medium", "large")`
      font-size: ${theme.font.sizes.large};
    `}
    ${media.between("small", "large")`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
