import Banner from "@/components/Banner";
import CodeOfConductModel from "@/components/CodeOfConductModel";
import Base from "../Base";
import * as S from "./styles";
import { NextSeo } from "next-seo";

const CodeOfConduct = () => {
  return (
    <Base>
      <NextSeo
        title="Código de Conduta e Ética - GeoGIS"
        description="CÓDIGO DE CONDUTA E ÉTICA DOS FORNECEDORES E PRESTADORES DE SERVIÇOS"
        openGraph={{
          title: "Código de Conduta e Ética - GeoGIS",
          description:
            "CÓDIGO DE CONDUTA E ÉTICA DOS FORNECEDORES E PRESTADORES DE SERVIÇOS"
        }}
      />
      <S.Background>
        <Banner
          img="/img/code.jpg"
          title="Código de Conduta e Ética GeoGIS"
          subtitle="Este CÓDIGO visa reforçar os valores essenciais da empresa e orientar a todos, colaboradores, prestadores de serviço, estagiários, aprendizes, parceiros e todos aqueles que atuam em nome da empresa, quanto às condutas esperadas."
        />
        <CodeOfConductModel />
      </S.Background>
    </Base>
  );
};

export default CodeOfConduct;
