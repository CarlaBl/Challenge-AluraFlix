
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Pagina404 from './paginas/Pagina404'

function App () {
    return (
        <div className="App">
            <Router>
            
                <Header/>
                <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='*' element={ <Pagina404/> } />
                
                </Routes>
                <Footer/>
            </Router>

        
        </div>
    )
}

export default App