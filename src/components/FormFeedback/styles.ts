import styled, { css } from "styled-components";
import media from "styled-media-query";

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.secondary};
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: 0;
    & > svg {
      width: 100%;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.lightGray};
    border: 0;
    outline: none;
    width: 100%;
    text-align: center;
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-align: center;
    font-size: ${theme.font.sizes.large};
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
