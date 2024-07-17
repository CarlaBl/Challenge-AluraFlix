
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import NuevoVideo from './paginas/NuevoVideo'
import NuevaCategoria from './paginas/NuevaCategoria'
import Pagina404 from './paginas/Pagina404'
import GlobalStyle from './GloblalStyle'
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define el elemento de la aplicación
function App () {
    return (
        <div className="App">
            <Router>
                <GlobalStyle />
                <Header/>
                <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/nuevovideo' element={ <NuevoVideo /> }/>
                <Route path='/nuevacategoria' element={ <NuevaCategoria /> }/>
                <Route path='*' element={ <Pagina404/> } />
                
                </Routes>
                <Footer/>
            </Router>

        
        </div>
    )
}

export default App