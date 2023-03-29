import styled, { css } from "styled-components";
import media from "styled-media-query";
import { LogoProps } from ".";

const wrapperModifiers = {
  xsmall: () => css`
    width: 5rem;
  `,
  small: () => css`
    width: 10rem;
  `,
  normal: () => css`
    width: 12rem;
  `,
  large: () => css`
    width: 20rem;
  `,
  xxlarge: () => css`
    width: 30rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan("medium")`
      display: none;
    `}
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, size, hideOnMobile }) => css`
    color: ${theme.colors.white};
    > img {
      ${!!size && wrapperModifiers[size]};
    }
    cursor: pointer;
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};
  `}
`;
