import * as S from "./styles";

export type LogoProps = {
  size?: "normal" | "large" | "xxlarge";
  hideOnMobile?: boolean;
};

const Logo = ({ size = "large", hideOnMobile }: LogoProps) => {
  return (
    <S.Wrapper size={size} hideOnMobile={hideOnMobile}>
      <img src="/img/logo.png" alt="Logomarca da empresa GeoGIS" />
    </S.Wrapper>
  );
};

export default Logo;
