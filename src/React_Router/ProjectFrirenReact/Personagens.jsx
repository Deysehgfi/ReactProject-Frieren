import Header from "./Header";
import {ImagePerson,Titulo, CharactherAll,InfoPerson , Section,} from "./Styled/App"
import decor from "./image/decor.png"
import frieren from "./image/frieren.png" 
import fern from "./image/fern.png" 
import stark from "./image/stark.png" 
import himmel from "./image/himmel.png" 
import heiter from "./image/heiter.png" 
import eisen from "./image/eisen.png" 
import Footer from "../../Footer";



const Personagens = () => {
    return(
        <>
        <Header/>
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
        <Footer/>
        
        </>
    )
}

export default Personagens;