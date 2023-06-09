import styled, { css } from "styled-components";
import { darken } from "polished";
import * as ButtonStyles from "../Button/styles";

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 6rem;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 0.2rem;
      margin-bottom: 2rem;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} auto ${theme.spacings.xsmall};
    }
    position: relative;
    z-index: 2;
  `}
`;

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;
    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};
      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`;
