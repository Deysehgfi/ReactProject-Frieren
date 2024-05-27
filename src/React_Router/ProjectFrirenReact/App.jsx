import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Personagens from './Personagens.jsx'
import Contato from './Contato.jsx'




const App = () => {
    return(
        <>
        <BrowserRouter>
       
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/personagens' element={<Personagens/>}/>
            <Route path='/contato' element={<Contato/>}/>
        
        </Routes>
        </BrowserRouter>
     

        </>
    )
}

export default App;
