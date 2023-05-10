import Link from "next/link";
import Heading from "../Heading";
import Logo from "../Logo";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Wrapper id="contact">
      <Logo size="small" />
      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            CONTATO
          </Heading>
          <a href="mailto:contato@geogis.com.br">contato@geogis.com.br</a>
          <a href="https://wa.me/556540631726" target="_blank" rel="noreferrer">
            +55 (65) 4063 - 1726
          </a>
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
            <Link href="/" target="_self">
              Início
            </Link>
            <Link href="/governance" target="_self">
              Modelo de governança
            </Link>
            <Link href="/portfolio" target="_self">
              Portfólio
            </Link>
            <Link href="https://ecoletasocial.com.br/" target="_blank">
              Ecoletasocial
            </Link>
          </nav>
        </S.Column>
        <S.Column aria-labelledby="footer-contact">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            LOCALIZAÇÃO
          </Heading>
          <span>Avenida Senador Filinto Muller, n° 440.</span>
          <span>Bairro Goiabeiras, Cuiabá/MT.</span>
          <span>CEP 78045-410.</span>
        </S.Column>
        <S.Copyright>
          GeoGIS 2023 &copy; Todos os direitos reservados.
        </S.Copyright>
      </S.Content>
    </S.Wrapper>
  );
};

export default Footer;
