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
          <a href="mailto:geo@gis.com.br">geo@gis.com.br</a>
        </S.Column>
        <S.Column>
          <Heading color="white" size="small" lineBottom lineColor="secondary">
            Fale com a gente
          </Heading>
          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
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
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
        <S.Copyright>
          GeoGIS 2023 &copy; Todos os direitos reservados.
        </S.Copyright>
      </S.Content>
    </S.Wrapper>
  );
};

export default Footer;
