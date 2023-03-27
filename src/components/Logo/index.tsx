import * as S from "./styles";

export type LogoProps = {
  size?: "normal" | "large" | "xxlarge" | "small";
  hideOnMobile?: boolean;
  withText?: boolean;
};

const Logo = ({ size = "large", hideOnMobile, withText = true }: LogoProps) => {
  return (
    <S.Wrapper size={size} hideOnMobile={hideOnMobile}>
      {withText && (
        <img src="/img/logo.png" alt="Logomarca da empresa GeoGIS" />
      )}
      {!withText && (
        <img src="/img/logo_no_text.png" alt="Logomarca da empresa GeoGIS" />
      )}
    </S.Wrapper>
  );
};

export default Logo;
