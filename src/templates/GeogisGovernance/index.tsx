import Banner from "@/components/Banner";
import GovernanceModel from "@/components/GovernanceModel";
import Base from "../Base";
import * as S from "./styles";

const GeogisGovernance = () => {
  return (
    <Base>
      <S.Background>
        <Banner
          img="/img/global.jpg"
          title="MODELO DE GOVERNANÇA NO RAMO DA GEOTECNOLOGIA"
          subtitle="A governança corporativa de geoprocessamento é importante porque permite que as organizações envolvidas atinjam seus objetivos, tomem decisões formais, controlem os riscos e garantam a conformidade."
        />
        <GovernanceModel />
      </S.Background>
    </Base>
  );
};

export default GeogisGovernance;
