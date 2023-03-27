import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import { InstagramWithCircle as Instagram } from "@styled-icons/entypo-social/InstagramWithCircle";
import { YoutubeWithCircle as Youtube } from "@styled-icons/entypo-social/YoutubeWithCircle";
import * as S from "./styles";

const Video = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <MediaMatch greaterThan="medium">
          <Heading lineBottom lineColor="secondary" color="white">
            QUER SABER MAIS SOBRE A GEOGIS?
          </Heading>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <Heading color="blue">QUER SABER MAIS SOBRE A GEOGIS?</Heading>
        </MediaMatch>
        <S.Description>Siga-nos em nossas redes sociais</S.Description>
        <a
          href="https://www.instagram.com/geogisgeotec/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram color="white" size={40} />
        </a>
        <a
          href="https://www.youtube.com/@geogis-geotecnologiascuiab4269/videos"
          target="_blank"
          rel="noreferrer"
        >
          <Youtube color="white" size={40} />
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
