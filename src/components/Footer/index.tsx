import Link from "next/link";
import Heading from "../Heading";
import Logo from "../Logo";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo size="normal" />
      <S.Content>
        <S.Column>
          <Heading color="white" size="small" lineBottom lineColor="secondary">
            Contato
          </Heading>
          <a href="mailto:contato@geogis.com.br">contato@geogis.com.br</a>
          <a href="https://wa.me/556540631726">+55 (65) 4063 - 1726</a>
        </S.Column>
        <S.Column>
          <Heading color="white" size="small" lineBottom lineColor="secondary">
            Fale com a gente
          </Heading>
          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/geogisgeotec/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Site GeoGIS
            </a>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="white" lineColor="secondary" lineBottom size="small">
            Links
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">Início</Link>
            <Link href="/about-us">Sobre nós</Link>
            <Link href="/portifolio">Portifólio</Link>
            <Link href="/services">Serviços</Link>
            <Link href="/ecoleta">Ecoletasocial</Link>
          </nav>
        </S.Column>
        <S.Column aria-labelledby="footer-contact">
          <Heading color="white" lineColor="secondary" lineBottom size="small">
            Localização
          </Heading>
          <span>Avenida Senador Filinto Muller, 440</span>
          <span>Goiabeiras - Cuiabá/MT</span>
        </S.Column>
        <S.Copyright>
          GeoGIS 2023 &copy; Todos os direitos reservados.
        </S.Copyright>
      </S.Content>
    </S.Wrapper>
  );
};

export default Footer;
