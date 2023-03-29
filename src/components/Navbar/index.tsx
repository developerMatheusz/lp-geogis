import MediaMatch from "../MediaMatch";
import Logo from "../Logo";
import { useState } from "react";
import { Menu2 as MenuIcon } from "@styled-icons/remix-line/Menu2";
import { Close as CloseIcon } from "@styled-icons/ionicons-outline/Close";
import * as S from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <Logo size="small" />
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <Logo withText={false} size="xsmall" />
      </MediaMatch>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="/">INÍCIO</S.MenuLink>
          <S.MenuLink href="/governance">MODELO DE GOVERNANÇA</S.MenuLink>
          <S.MenuLink href="https://ecoletasocial.com.br/" target="_blank">
            ECOLETASOCIAL
          </S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/">INÍCIO</S.MenuLink>
          <S.MenuLink href="/governance">MODELO DE GOVERNANÇA</S.MenuLink>
          <S.MenuLink href="https://ecoletasocial.com.br/" target="_blank">
            ECOLETASOCIAL
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </S.IconWrapper>
      </MediaMatch>
    </S.Wrapper>
  );
};

export default Navbar;
