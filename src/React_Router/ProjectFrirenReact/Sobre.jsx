import Header from "./Header";
import {Info, Titulo , Section, Descricao,Button} from "./Styled/App";
import decor from './image/decor.png'
import Footer from "../../Footer";

const Sobre = () => {
    return(
        <>
        <Header/>
         <Section>
            <Info>
                
                <Titulo>Sobre</Titulo>
                <Descricao>O rei demônio foi derrotado e o grupo de heróis vitoriosos voltam para casa antes de se separar. Os quatro - a maga Frieren, o herói Himmel , o sacerdote Heiter e o guerreiro Eisen - relembram sua jornada de uma década quando chega o momento de se despedirem. Mas a passagem do tempo é diferente para os elfos.</Descricao>
                <Button href="https://frieren.fandom.com/wiki/Frieren_Wiki">Saiba mais</Button>
                <img src={decor} alt="" />
            </Info>
         </Section>
         <Footer/>
        </>
    )
}

export default Sobre;