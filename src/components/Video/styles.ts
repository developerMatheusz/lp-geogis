import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
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
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-right: 5rem;
    text-align: left;
    > a {
      color: ${theme.colors.gray};
      margin-right: 0.6rem;
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      &:hover {
        color: ${theme.colors.darkGray};
      }
      transition: 0.3s;
    }
    svg {
      &:hover {
        color: ${theme.colors.gray};
      }
      transition: 0.3s;
    }

    ${media.lessThan("medium")`
      display: block;
      align-items: center;
      justify-content: center;
      margin-right: 0rem;
      text-align: center;
      padding: 0.3rem;
      > a {
        font-size: ${theme.font.sizes.small};
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;
