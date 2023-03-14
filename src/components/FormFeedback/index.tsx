import { NewMessage } from "@styled-icons/entypo/NewMessage";
import Button from "../Button";
import TextField from "../TextField";
import Logo from "../Logo";
import { FormWrapper } from "../Form";

const FormFeedback = () => {
  return (
    <FormWrapper>
      <Logo />
      <form>
        <TextField
          name="text"
          placeholder="Envie-nos seu feedback"
          type="text"
          icon={<NewMessage />}
        />
        <Button size="large" fullWidth>
          Enviar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormFeedback;
