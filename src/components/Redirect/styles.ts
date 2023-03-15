import styled, { css } from "styled-components";

export const Wrapper = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0px;
    right: 0px;
    > img {
      background: ${theme.colors.secondary};
      transition: 0.3s;
      padding: 0.5rem;
      border-radius: 100%;
      width: 40px;
      &:hover {
        background: ${theme.colors.darkBlue};
      }
    }
  `}
`;
