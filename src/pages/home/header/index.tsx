import * as S from "./styles";
import MediaMatch from "../../../components/MediaMatch/index";
import Logo from "../../../components/Logo";

const Header = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile size="normal" />
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/">INÍCIO</S.MenuLink>
          <S.MenuLink href="/">SOBRE NÓS</S.MenuLink>
          <S.MenuLink href="/">PORTIFÓLIO</S.MenuLink>
          <S.MenuLink href="/">SERVIÇOS</S.MenuLink>
          <S.MenuLink href="/">ECOLETASOCIAL</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <S.MenuLink href="/">INÍCIO</S.MenuLink>
        <S.MenuLink href="/">ECOLETASOCIAL</S.MenuLink>
      </MediaMatch>
    </S.Wrapper>
  );
};

export default Header;
