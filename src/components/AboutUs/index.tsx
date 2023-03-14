import { PhotoCameraFront as Photo } from "@styled-icons/material/PhotoCameraFront";
import { PhotoLibrary } from "@styled-icons/material-outlined/PhotoLibrary";
import { BuildingHouse } from "@styled-icons/boxicons-regular/BuildingHouse";
import { HouseDoor as House } from "@styled-icons/bootstrap/HouseDoor";
import { DeveloperBoard } from "@styled-icons/fluentui-system-regular/DeveloperBoard";
import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import * as S from "./styles";

const AboutUs = () => {
  return (
    <S.Wrapper id="about-us">
      <S.Content>
        <S.Column>
          <MediaMatch greaterThan="medium">
            <Heading lineBottom lineColor="secondary" size="huge">
              VOCÊ JÁ SE QUESTIONOU O QUE É GEOTECNOLOGIA?
            </Heading>
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Heading lineBottom lineColor="secondary">
              VOCÊ JÁ SE QUESTIONOU O QUE É GEOTECNOLOGIA?
            </Heading>
          </MediaMatch>
          <S.Description>
            Geotecnologia é o conglomerado de tecnologias para colhimento,
            processamento, análise e fornecimento de informações com referência
            geográfica. Previamente, permita-nos a apresentarmos.
          </S.Description>
        </S.Column>
        <S.Column>
          <S.ContainerIcon>
            <BuildingHouse />
          </S.ContainerIcon>
          <Heading color="white">Regularização de Imóveis Urbanos</Heading>
          <S.Description>
            Conforme a Constituição Federal, um dos nossos direitos fundamentais
            e humano são a garantia do direito à moradia. A regularização
            fundiária veio como uma grande conquista para o amparo daqueles que
            vivem em núcleos habitacionais informais, não possuindo de fato a
            propriedade - apesar da irregularidade de imóveis no país ser um
            problema histórico de invasão, loteamentos feitos sem observância da
            lei, de terrenos e imóveis vendidos de forma ilegal e de construções
            sem projeto aprovado pelas prefeituras Municipais/Estado.
          </S.Description>
        </S.Column>
        <S.Column>
          <S.ContainerIcon>
            <House />
          </S.ContainerIcon>
          <Heading color="white">Regularização de Imóveis Rurais</Heading>
          <S.Description>
            A posse e propriedade são propósitos que merecem atenção especial da
            sociedade, pois podem não parecer, mas é um procedimento muito
            importante ter uma habitação digna para produção de plantio,
            agricultura, pecuária e assim por diante. Quando o assentamento é
            irregular, gera barreira para os posseiros como exaustão dos solos,
            baixa produtividade das culturas, baixos preços para os produtos
            agrícolas, dificuldades de acesso ao crédito rural, etc. Através da
            regularização rural é possível viabilizar as melhorias
            correlacionadas a essas necessidades para a produtividade
            consolidada, com a evidência efetiva de subsistência socioeconômica
            sustentável de núcleos familiares e segmentos sociais com tradições
            campesinas ou opção pela vida rural.
          </S.Description>
        </S.Column>
        <S.Column>
          <S.ContainerIcon>
            <Photo />
          </S.ContainerIcon>
          <Heading color="white">Imageamento de Rodovias</Heading>
          <S.Description>
            São imagens panorâmicas georreferenciadas com capacidade de
            esmaecimento de aparências e letreiros, os produtos são opcionais e
            personalizados de acordo com as finalidades do cliente. É sempre
            significativo estar sempre prudente nos serviços às coordenadas
            cartográficas, geográficas, observar estruturas de referência,
            cartas de informações e ultrametria.
          </S.Description>
        </S.Column>
        <S.Column>
          <S.ContainerIcon>
            <PhotoLibrary />
          </S.ContainerIcon>
          <Heading color="white">Aerofotogrametria</Heading>
          <S.Description>
            É de extrema importância para a geotecnologia a Aerofotogrametria.
            Esse tipo de atividade é classificado como um tipo de fotografia
            aérea para produzir medições operacionalmente aprofundadas, com
            qualidade e precisão fundamentais para os projetos de
            aerolevantamento. Os principais itens para essa tarefa são ortofotos
            e fotos aéreas, curvas de nível, perfilamento a laser LIDAR (Light
            Detection And Ranging), modelos digitais de elevação (MDE),
            simulações em ambiente 3D, cadastros urbanos e dentre outros que
            auxiliam nas etapas desta via.
          </S.Description>
        </S.Column>
        <S.Column>
          <S.ContainerIcon>
            <DeveloperBoard />
          </S.ContainerIcon>
          <Heading color="white">Desenvolvimento de sistemas</Heading>
          <S.Description>
            O futuro é o mundo digital, e a tecnologia está presente cada vez
            mais em tudo que fazemos. Atuamos em criações de sistemas em
            qualquer área, focando na elaboração de softwares com uma atuação em
            diversas fases da criação do sistema operacional. Analisamos e
            trazemos formas tecnológicas diferenciadas, considerando as
            principais tendências do mercado e a evolução da transformação
            digital.
          </S.Description>
        </S.Column>
      </S.Content>
    </S.Wrapper>
  );
};

export default AboutUs;
