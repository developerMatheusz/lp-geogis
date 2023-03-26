import Heading from "../Heading";
import { PhotoCameraFront as Photo } from "@styled-icons/material/PhotoCameraFront";
import { PhotoLibrary } from "@styled-icons/material-outlined/PhotoLibrary";
import { BuildingHouse } from "@styled-icons/boxicons-regular/BuildingHouse";
import { HouseDoor as House } from "@styled-icons/bootstrap/HouseDoor";
import { DeveloperBoard } from "@styled-icons/fluentui-system-regular/DeveloperBoard";
import * as S from "./styles";

type Icon =
  | "Photo"
  | "PhotoLibrary"
  | "BuildingHouse"
  | "House"
  | "DeveloperBoard";

export type NavAboutUsProps = {
  title: string;
  description: string;
};

export type BodyAboutUsProps = {
  title: string;
  description: string;
  icons: Icon;
};

export type AboutUsProps = {
  itemsNav: NavAboutUsProps;
  itemsBody: BodyAboutUsProps[];
};

const AboutUs = ({ itemsNav, itemsBody }: AboutUsProps) => {
  return (
    <S.Wrapper id="about-us">
      <S.Content>
        <S.Column>
          <Heading color="white" lineBottom lineColor="secondary">
            {itemsNav.title}
          </Heading>
          <S.Description>{itemsNav.description}</S.Description>
        </S.Column>
        {itemsBody.map((itemBody, index) => (
          <S.Column key={index}>
            <S.ContainerIcon>
              {itemBody.icons === "Photo" ? <Photo /> : null}
              {itemBody.icons === "PhotoLibrary" ? <PhotoLibrary /> : null}
              {itemBody.icons === "BuildingHouse" ? <BuildingHouse /> : null}
              {itemBody.icons === "House" ? <House /> : null}
              {itemBody.icons === "DeveloperBoard" ? <DeveloperBoard /> : null}
            </S.ContainerIcon>
            <Heading color="white">{itemBody.title}</Heading>
            <S.Description>{itemBody.description}</S.Description>
          </S.Column>
        ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default AboutUs;
