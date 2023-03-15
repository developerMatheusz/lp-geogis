import { NextPage } from "next";
import VLibras from "vlibras-nextjs";
import * as S from "./styles";

const VLibra: NextPage = () => {
  return (
    <S.Wrapper>
      <VLibras forceOnload />
    </S.Wrapper>
  );
};

export default VLibra;
