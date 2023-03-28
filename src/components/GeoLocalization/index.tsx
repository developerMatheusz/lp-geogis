import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import * as S from "./styles";

const GeoLocalization = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <MediaMatch greaterThan="medium">
          <Heading lineBottom lineColor="secondary" color="white">
            ONDE ESTAMOS LOCALIZADOS
          </Heading>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <Heading color="white">ONDE ESTAMOS LOCALIZADOS</Heading>
        </MediaMatch>
        <S.Description>
          Avenida Senador Filinto Muller, n° 440.
          <br />
          Bairro Goiabeiras, Cuiabá/MT.
          <br />
          CEP 78045-410.
        </S.Description>
      </S.Content>
      <MediaMatch greaterThan="medium">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.982687457263!2d-56.110682185231354!3d-15.59257382217703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1214ad852e3%3A0xfafd3cf28437464d!2sGeoGIS!5e0!3m2!1spt-BR!2sbr!4v1680007301639!5m2!1spt-BR!2sbr"
          width="500"
          height="276"
          allowFullScreen={true}
          loading="lazy"
          frameBorder="0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.982687457263!2d-56.110682185231354!3d-15.59257382217703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1214ad852e3%3A0xfafd3cf28437464d!2sGeoGIS!5e0!3m2!1spt-BR!2sbr!4v1680007301639!5m2!1spt-BR!2sbr"
          width="300"
          height="167"
          allowFullScreen={true}
          loading="lazy"
          frameBorder="0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MediaMatch>
    </S.Wrapper>
  );
};

export default GeoLocalization;
