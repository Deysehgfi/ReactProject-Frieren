
import {Info, Titulo , Section, Descricao,Button , InfoPerson , CharactherAll, ImagePerson} from "./Styled/App";

import decor from './image/decor.png'
import frieren from "./image/frieren.png" 
import fern from "./image/fern.png" 
import stark from "./image/stark.png" 
import himmel from "./image/himmel.png" 
import heiter from "./image/heiter.png" 
import eisen from "./image/eisen.png" 



const Main = () => {
    return(
        <>
        
        <Section>
            <Info>
                
                <Titulo>Sobre</Titulo>
                <Descricao>O rei demônio foi derrotado e o grupo de heróis vitoriosos voltam para casa antes de se separar. Os quatro - a maga Frieren, o herói Himmel , o sacerdote Heiter e o guerreiro Eisen - relembram sua jornada de uma década quando chega o momento de se despedirem. Mas a passagem do tempo é diferente para os elfos.</Descricao>
                <Button href="https://frieren.fandom.com/wiki/Frieren_Wiki">Saiba mais</Button>
                <img src={decor} alt="" />
            </Info>
         </Section>
         <Section>
            <InfoPerson>
                <Titulo>Personagens</Titulo>
                <img src={decor} alt="" />
                <CharactherAll>
                    <a href="https://frieren.fandom.com/wiki/Frieren"> <ImagePerson src={frieren} alt="" /></a>
                    <a href="https://frieren.fandom.com/wiki/Fern"> <ImagePerson src={fern} alt="" /></a>
                    <a href="https://frieren.fandom.com/wiki/Stark"> <ImagePerson src={stark} alt="" /></a>
                    <a href="https://frieren.fandom.com/wiki/Himmel"> <ImagePerson src={himmel} alt="" /></a>
                    <a href="https://frieren.fandom.com/wiki/Heiter"> <ImagePerson src={heiter} alt="" /></a>
                    <a href="https://frieren.fandom.com/wiki/Eisen"> <ImagePerson src={eisen} alt="" /></a>
                   
                    
                </CharactherAll>

            </InfoPerson>
        </Section>
     
       
        </>
       
    )
}

export default Main;