import styled from "styled-components";

export const Wrapper = styled.a`
  position: fixed;
  bottom: 10px;
  right: 20px;
  > img {
    background: #009ddd;
    transition: 0.3s;
    padding: 0.5rem;
    border-radius: 100%;
    width: 50px;
    &:hover {
      background: #386dbd;
    }
  }
`;
