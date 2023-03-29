import Heading from "@/components/Heading";
import MediaMatch from "@/components/MediaMatch";
import Base from "../Base";
import * as S from "./styles";

const GeogisGovernance = () => {
  return (
    <Base>
      <S.Content>
        <MediaMatch greaterThan="medium">
          <Heading
            lineBottom
            lineColor="secondary"
            color="secondary"
            size="huge"
          >
            MODELO DE GOVERNANÇA GEOGIS
          </Heading>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <Heading lineBottom lineColor="secondary" color="secondary">
            MODELO DE GOVERNANÇA GEOGIS
          </Heading>
        </MediaMatch>
        <S.Description>
          O modelo de governança é a forma como a empresa organiza seus
          processos mais importantes, definindo a dinâmica, atribuições e
          composição de cada esfera de avaliação de resultados. Sendo assim, a
          GeoGIS é organizada da seguinte forma:
        </S.Description>
        <img src="/img/model/model1.png" />
      </S.Content>
    </Base>
  );
};

export default GeogisGovernance;
