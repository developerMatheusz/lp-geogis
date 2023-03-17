import { NewMessage } from "@styled-icons/entypo/NewMessage";
import Button from "../Button";
import Logo from "../Logo";
import { FormWrapper } from "../Form";
import * as S from "./styles";
import { useState } from "react";

const FormFeedback = () => {
  const [content, setContent] = useState("");

  return (
    <FormWrapper>
      <Logo />
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
          Envie seu feedback sobre a empresa GeoGIS Tecnologia LTDA
        </S.Message>
      </form>
    </FormWrapper>
  );
};

export default FormFeedback;
