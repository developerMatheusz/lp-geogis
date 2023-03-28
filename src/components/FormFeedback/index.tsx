import Button from "../Button";
import Logo from "../Logo";
import { FormWrapper } from "../Form";
import { useState } from "react";
import { NewMessage } from "@styled-icons/entypo/NewMessage";
import * as S from "./styles";

const FormFeedback = () => {
  const [content, setContent] = useState("");

  return (
    <FormWrapper>
      <Logo size="large" />
      <form>
        <S.InputWrapper>
          <S.Icon>
            <NewMessage />
          </S.Icon>
          <S.Input
            name="text"
            placeholder="Escreva sua mensagem"
            type="text"
            onChange={(e) => setContent(e.target.value)}
          />
        </S.InputWrapper>
        <Button
          as="a"
          href={`mailto:matheusdeveloper001@gmail.com?subject=GeoGIS Feedback&body=${content}`}
          size="large"
          fullWidth
        >
          Enviar
        </Button>
        <S.Message>
          Envie seu feedback sobre a empresa GeoGIS Geotecnologia LTDA
        </S.Message>
      </form>
    </FormWrapper>
  );
};

export default FormFeedback;
