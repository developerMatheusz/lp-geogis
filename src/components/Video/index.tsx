import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import * as S from "./styles";

const Video = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <MediaMatch greaterThan="medium">
          <Heading lineBottom lineColor="secondary" color="blue">
            QUER SABER MAIS SOBRE A GEOGIS?
          </Heading>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <Heading color="blue">QUER SABER MAIS SOBRE A GEOGIS?</Heading>
        </MediaMatch>
        <S.Description>Siga-nos no Instagram</S.Description>
        <a
          href="https://www.instagram.com/geogisgeotec/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={40} />
        </a>
      </S.Content>
      <MediaMatch greaterThan="medium">
        <iframe
          width="500"
          height="276"
          src="https://www.youtube.com/embed/W4wRIVLq_t0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <iframe
          width="300"
          height="167"
          src="https://www.youtube.com/embed/W4wRIVLq_t0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </MediaMatch>
    </S.Wrapper>
  );
};

export default Video;
