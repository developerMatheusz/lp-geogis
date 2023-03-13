import styled, { css } from "styled-components";

export const Wrapper = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 10px;
    left: 30px;
    > img {
      background: ${theme.colors.gray};
      transition: 0.3s;
      padding: 0.5rem;
      border-radius: 100%;
      &:hover {
        background: ${theme.colors.darkGray};
      }
      width: 50px;
    }
  `}
`;
