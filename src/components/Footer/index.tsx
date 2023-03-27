import Link from "next/link";
import Heading from "../Heading";
import Logo from "../Logo";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Wrapper id="contact">
      <Logo size="large" />
      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            CONTATO
          </Heading>
          <a href="mailto:contato@geogis.com.br">contato@geogis.com.br</a>
          <a href="https://wa.me/556540631726">+55 (65) 4063 - 1726</a>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            FALE COM A GENTE
          </Heading>
          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/geogisgeotec/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a href="/" rel="noopenner, noreferrer">
              Site GeoGIS
            </a>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            LINKS
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">Início</Link>
            <Link href="/about-us">Sobre nós</Link>
            <Link href="/services">Últimas notícias</Link>
            <Link href="/ecoleta">Ecoletasocial</Link>
          </nav>
        </S.Column>
        <S.Column aria-labelledby="footer-contact">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            LOCALIZAÇÃO
          </Heading>
          <span>Avenida Senador Filinto Muller - </span>
          <span>n° 440, CEP 78045-410 - </span>
          <span>bairro Goiabeiras, Cuiabá/MT</span>
        </S.Column>
        <S.Copyright>
          GeoGIS 2023 &copy; Todos os direitos reservados.
        </S.Copyright>
      </S.Content>
    </S.Wrapper>
  );
};

export default Footer;
