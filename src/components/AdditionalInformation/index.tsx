import { Verified } from "@styled-icons/material/Verified";
import { Handshake } from "@styled-icons/fluentui-system-filled/Handshake";
import { GitBranch } from "@styled-icons/boxicons-regular/GitBranch";
import Heading from "../Heading";
import * as S from "./styles";

const AdditionalInformation = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Column>
          <Verified />
          <Heading color="green">+4 MILHÕES</Heading>
          <S.Description>De hectares imageados</S.Description>
        </S.Column>
        <S.Column>
          <Handshake />
          <Heading color="green">+11 MIL</Heading>
          <S.Description>Registros entregues (REURB)</S.Description>
        </S.Column>
        <S.Column>
          <GitBranch />
          <Heading color="green">+1 MILHÃO</Heading>
          <S.Description>De hectares georreferenciados</S.Description>
        </S.Column>
      </S.Content>
    </S.Wrapper>
  );
};

export default AdditionalInformation;
