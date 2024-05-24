import { styled } from "styled-components"

export const Cores = {
    AzulEscuro:'#29436C',
    AzulClaro:'#3D69AF',
    Marron:'#60534E',
    MarronEscuro:'#251D1A',
    Preto:'#464949',
    Branco:'#ffff',
    BrancoTransparent:'#e4e7c332',
    BrancoMeio:'#faf3d781'
}

export const Nav = styled.nav`
background-image: linear-gradient(to bottom, ${Cores.AzulEscuro}, ${Cores.AzulClaro}, transparent);
height: 118px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
position: fixed;
z-index: 9999;

`
export const ImageLogo = styled.img`
width: 268px;
height: 91px;
`

//home

export const Section = styled.section`
display: flex;
align-items: center;
justify-content: center;
padding: 140px;

`
export const Info = styled.div`
backdrop-filter:blur(2px);
background-color: ${Cores.BrancoMeio} ;
height: 500px;
width: 350px;
border: solid 1px ${Cores.Marron};
border-radius: 0px 20px 0px 20px ;
padding: 20px;
display: flex;
flex-direction: column;
gap: 32px;
align-items: flex-start;
`

export const Titulo = styled.h1`
color: ${Cores.Preto};
font-size: 48px;
font-family: "Rakkas", serif;
font-weight: 500;
`

export const Descricao = styled.p`
color:${Cores.MarronEscuro}
` 
export const Button = styled.a`
border: solid 2px ${Cores.Marron};
border-radius:15px;
width: 150px;
padding: 15px;
background-color: transparent;
transition: 0.5s; 
text-align: center; 
text-decoration: none;
color: ${Cores.MarronEscuro};
&:hover{
    background-color: ${Cores.Marron};
    color:${Cores.Branco};
    border-radius: 90px;
}

`


export const InfoPerson = styled.div`
backdrop-filter:blur(2px);
background-color: ${Cores.BrancoMeio} ;
height: 600px;
width: 100%;
border: solid 1px ${Cores.Marron};
border-radius: 0px 20px 0px 20px ;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;

`

export const CharactherAll = styled.div`
width: 630px;
padding: 30px;

`

export const ImagePerson = styled.img`
width: 200px;
height: 200px;
border-radius: 100%;
padding: 3px;
transition: 0.3s;
&:hover{
    transform: scale(1.1);
}
`



export const Input = styled.input`
border: solid 1px ${Cores.Marron};
border-radius:50px;
width: 300px;
padding: 15px;
background-color: transparent;

text-align: center; 
text-decoration: none;
color: ${Cores.MarronEscuro};
`


export const Rodape = styled.footer`

background-color: ${Cores.Marron};
text-align: center; 
height: 150px;
align-items: center;
justify-content: center;
padding-top: 60px;
`




