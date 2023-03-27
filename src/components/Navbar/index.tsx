import MediaMatch from "../MediaMatch";
import Logo from "../Logo";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Wrapper>
      <MediaMatch greaterThan="huge">
        <Logo hideOnMobile size="large" />
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/">INÍCIO</S.MenuLink>
          <S.MenuLink href="#about-us">SOBRE NÓS</S.MenuLink>
          <S.MenuLink href="#last-news">ÚLTIMAS NOTÍCIAS</S.MenuLink>
          <S.MenuLink href="#contact">CONTATO</S.MenuLink>
          <S.MenuLink href="https://ecoletasocial.com.br/" target="_blank">
            ECOLETASOCIAL
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <S.MenuLink href="/">INÍCIO</S.MenuLink>
        <S.MenuLink href="https://ecoletasocial.com.br/" target="_blank">
          ECOLETASOCIAL
        </S.MenuLink>
      </MediaMatch>
    </S.Wrapper>
  );
};

export default Navbar;
