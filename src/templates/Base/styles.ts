import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    flex: 1 0 auto;
  `}
`;

export const SectionFooter = styled.footer`
  ${({ theme }) => css`
    padding-top: 2rem;
    background: ${theme.colors.lightGray};
  `}
`;
