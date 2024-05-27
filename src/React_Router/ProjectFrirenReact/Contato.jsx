import Header from "./Header";
import {Info, Titulo , Section, Input} from "./Styled/App";
import Footer from "../../Footer";

const Sobre = () => {
    return(
        <>
        <Header/>
         <Section>
            <Info>
                
                <Titulo>Contato</Titulo>
                <label>Nome:</label>
                <Input type="text" placeholder="digite seu nome" />
                <label>E-mail:</label>
                <Input type="email" placeholder="digite seu email" />
                <label>Mensagem:</label>
                <Input type="text" placeholder="digite sua mensagem" />
         
            </Info>
         </Section>

         <Footer/>
        </>
    )
}

export default Sobre;