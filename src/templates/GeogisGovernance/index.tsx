import Banner from "@/components/Banner";
import GovernanceModel from "@/components/GovernanceModel";
import Base from "../Base";
import * as S from "./styles";
import { NextSeo } from "next-seo";

const GeogisGovernance = () => {
  return (
    <Base>
      <NextSeo
        title="Modelo de Governança - GeoGIS"
        description="Os modelos de governança corporativa podem ser resumidos como diferentes conjuntos de processos que possuem como principal objetivo implementar a cultura do negócio na rotina dos colaboradores para melhorar a qualidade da gestão empresarial."
        openGraph={{
          title: "Modelo de Governança - GeoGIS",
          description:
            "Os modelos de governança corporativa podem ser resumidos como diferentes conjuntos de processos que possuem como principal objetivo implementar a cultura do negócio na rotina dos colaboradores para melhorar a qualidade da gestão empresarial."
        }}
      />
      <S.Background>
        <Banner
          img="/img/global.jpg"
          title="Modelo de governança no ramo da Geotecnologia"
          subtitle="A governança corporativa de geoprocessamento é importante porque permite que as organizações envolvidas atinjam seus objetivos, tomem decisões formais, controlem os riscos e garantam a conformidade."
        />
        <GovernanceModel />
      </S.Background>
    </Base>
  );
};

export default GeogisGovernance;
