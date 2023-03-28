import Heading from "../Heading";
import { Verified } from "@styled-icons/material/Verified";
import { Handshake } from "@styled-icons/fluentui-system-filled/Handshake";
import { GitBranch } from "@styled-icons/boxicons-regular/GitBranch";
import * as S from "./styles";

type Icon = "Verified" | "Handshake" | "GitBranch";

export type ListInformationsProps = {
  title: string;
  description: string;
  icons: Icon;
};

export type AdditionalInformationProps = {
  items: ListInformationsProps[];
};

const AdditionalInformation = ({ items }: AdditionalInformationProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        {items.map((item, index) => (
          <S.Column key={index}>
            {item.icons === "Verified" ? <Verified /> : null}
            {item.icons === "Handshake" ? <Handshake /> : null}
            {item.icons === "GitBranch" ? <GitBranch /> : null}
            <Heading color="white">{item.title}</Heading>
            <S.Description>{item.description}</S.Description>
          </S.Column>
        ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default AdditionalInformation;
