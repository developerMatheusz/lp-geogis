import styled, { css } from "styled-components";
import media from "styled-media-query";

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    border: 1px solid ${theme.colors.secondary};
    background: ${theme.colors.white};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
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
    background: ${theme.colors.white};
    border: 0;
    outline: none;
    width: 100%;
    text-align: center;
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;
    font-size: ${theme.font.sizes.large};
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
    `}
    margin-bottom: 4rem;
  `}
`;
