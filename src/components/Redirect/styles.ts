import styled, { css } from "styled-components";

export const Wrapper = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0rem;
    right: 0rem;
    > img {
      background: ${theme.colors.secondary};
      transition: 0.3s;
      padding: 0.5rem;
      border-radius: 100%;
      width: 5rem;
      &:hover {
        background: ${theme.colors.blue};
      }
    }
    z-index: 3;
  `}
`;
