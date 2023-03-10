import styled from "styled-components";
import { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  position: relative;
`;

type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    ${media.greaterThan("medium")`
        height: 58rem;
    `}
  `}
`;

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};
    ${media.greaterThan("medium")`
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: green;
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan("medium")`
            font-size: ${theme.font.sizes.large};
        `}
  `}
`;