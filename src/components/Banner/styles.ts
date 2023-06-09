import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  position: relative;
  z-index: 2;
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 23rem;
    position: relative;
    background-color: ${theme.colors.lightGray};
    ${media.greaterThan("medium")`
      height: 70rem;
    `}
  `}
`;

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20rem;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan("medium")`
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
      > h2, h3 {
        max-width: 100rem;
      }
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.huge};
    `}
    text-align: left;
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;
