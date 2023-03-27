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
  `}
`;

export const Content = styled.div`
  margin-right: 5rem;
  text-align: left;
  > a {
    text-decoration: none;
    color: black;
    margin-bottom: 1rem;
  }
  ${media.lessThan("medium")`
    display: grid;
    align-items: center;
    justify-content: center;
    margin-right: 0rem;
    text-align: center;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
  `}
`;
