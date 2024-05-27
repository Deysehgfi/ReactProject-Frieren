import {Nav, ImageLogo} from "./Styled/App";
import { Link } from "react-router-dom";
import Logo from './image/Logo.png'

const Header = () => {
    return(
        <Nav>
            <Link className="linksNav" to='/'>Home</Link>
            <Link className="linksNav" to='/sobre'>Sobre</Link>
            <ImageLogo src={Logo} alt="" />
            <Link className="linksNav" to='/personagens'>Personagens</Link>
            <Link className="linksNav" to='/contato'>Contato</Link>
            

        </Nav>
    )
}

export default Header;