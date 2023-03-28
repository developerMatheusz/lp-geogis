import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Redirect from "@/components/Redirect";
import VLibra from "@/components/VLibra";
import Whatsapp from "@/components/Whatsapp";
import * as S from "./styles";

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <VLibra />
      <Navbar />
      <S.Content>{children}</S.Content>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
      <Whatsapp />
      <Redirect />
    </S.Wrapper>
  );
};

export default Base;
