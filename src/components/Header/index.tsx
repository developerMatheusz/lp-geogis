import MediaMatch from "../MediaMatch";
import Logo from "../Logo";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Wrapper id="navbar">
      <MediaMatch greaterThan="huge">
        <Logo hideOnMobile size="xxlarge" />
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

export default Header;
