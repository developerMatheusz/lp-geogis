import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import * as S from "./styles";

const GovernanceModel = () => {
  return (
    <S.Content>
      <MediaMatch greaterThan="medium">
        <Heading lineBottom lineColor="secondary" color="secondary" size="huge">
          MODELO DE GOVERNANÇA GEOGIS
        </Heading>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <Heading lineBottom lineColor="secondary" color="secondary">
          MODELO DE GOVERNANÇA GEOGIS
        </Heading>
      </MediaMatch>
      <S.Description>
        O modelo de governança é a forma como a empresa organiza seus processos
        mais importantes, definindo a dinâmica, atribuições e composição de cada
        esfera de avaliação de resultados. Sendo assim, a GeoGIS é organizada da
        seguinte forma:
      </S.Description>
      <img
        src="/img/model/model1.png"
        alt="Imagem ilustrativa sobre modelo de governança"
      />
      <MediaMatch greaterThan="medium">
        <Heading lineBottom lineColor="secondary" color="secondary">
          MODELOS DE GESTÃO
        </Heading>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <Heading
          lineBottom
          lineColor="secondary"
          color="secondary"
          size="small"
        >
          MODELOS DE GESTÃO
        </Heading>
      </MediaMatch>
      <S.Description>
        A GeoGIS Geotecnologia, perpassa por dois modelos de gestão onde ambos
        procuram relevâncias que transformam e promovem o crescimento
        sustentável da empresa de forma linear.
      </S.Description>
      <ul>
        <li>
          Gestão democrática: As tomadas de decisões contam com a participação
          de líderes e colaboradores, com objetivo de estimular novas ideias e
          novas formas de atuação profissional.
        </li>
        <li>
          Gestão meritocrática: As melhores performances e resultados em seus
          respectivos departamentos tem premiações conforme a empresa sugere,
          (gameficação) o objetivo é dar foco em resultados.
        </li>
      </ul>
      <MediaMatch greaterThan="medium">
        <Heading lineBottom lineColor="secondary" color="secondary">
          METODOLOGIAS APLICADAS
        </Heading>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <Heading
          lineBottom
          lineColor="secondary"
          color="secondary"
          size="small"
        >
          METODOLOGIAS APLICADAS
        </Heading>
      </MediaMatch>
      <ul>
        <li>Compliance (Manual de Conduta e Ética).</li>
        <li>
          Reuniões periódicas semanais para alinhamentos de informações entre as
          equipes.
        </li>
        <li>Mapeamento dos processos.</li>
        <li>Inovação e criação de processos.</li>
        <li>Implantação da Filosofia 5s.</li>
        <li>Treinamentos com as equipes de temas diversos.</li>
      </ul>
      <MediaMatch greaterThan="medium">
        <Heading lineBottom lineColor="secondary" color="secondary">
          O QUE É RELEVANTE NESTES MODELOS DE GESTÃO
        </Heading>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <Heading
          lineBottom
          lineColor="secondary"
          color="secondary"
          size="small"
        >
          O QUE É RELEVANTE NESTES MODELOS DE GESTÃO
        </Heading>
      </MediaMatch>
      <ul>
        <li>Transparência.</li>
        <li>Equidades.</li>
        <li>Liquidez.</li>
        <li>Prestação de contas.</li>
        <li>
          Responsabilidade corporativa com os colaboradores e prestadores MEIS.
        </li>
        <li>Responsabilidade social.</li>
      </ul>
      <img
        src="/img/model/model2.png"
        alt="Imagem ilustrativa sobre modelos de gestão"
      />
    </S.Content>
  );
};

export default GovernanceModel;
