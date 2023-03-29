import * as S from "./styles";

export type LogoProps = {
  size?: "normal" | "large" | "xxlarge" | "small" | "xsmall";
  hideOnMobile?: boolean;
  withText?: boolean;
};

const Logo = ({ size = "large", hideOnMobile, withText = true }: LogoProps) => {
  return (
    <S.Wrapper size={size} hideOnMobile={hideOnMobile}>
      {withText && (
        <img src="/img/geogis/logo.png" alt="Logomarca da empresa GeoGIS" />
      )}
      {!withText && (
        <img
          src="/img/geogis/logo_no_text.png"
          alt="Logomarca da empresa GeoGIS"
        />
      )}
    </S.Wrapper>
  );
};

export default Logo;
