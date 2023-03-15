import styled, { css } from "styled-components";

export const Wrapper = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 10px;
    right: 20px;
    > img {
      background: ${theme.colors.secondary};
      transition: 0.3s;
      padding: 0.5rem;
      border-radius: 100%;
      width: 50px;
      &:hover {
        background: ${theme.colors.darkBlue};
      }
    }
  `}
`;
