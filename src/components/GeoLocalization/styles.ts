import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
    text-align: center;
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    ${media.lessThan("medium")`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    > div {
      margin-top: 1rem;
    }
  `}
    background: linear-gradient(
      135deg,
      #0a5483 0%,
      #0a5483 50%,
      #02416d 50%,
      #02416d 100%
    );
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-right: 5rem;
    text-align: left;
    > a {
      text-decoration: none;
      color: ${theme.colors.black};
      margin: 0.3rem;
    }
    ${media.lessThan("medium")`
      display: block;
      align-items: center;
      justify-content: center;
      margin-right: 0rem;
      text-align: center;
      padding: 0.3rem;
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
