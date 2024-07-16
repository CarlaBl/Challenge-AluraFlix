
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

function App () {
    return (
        <div className="App">
            <Router>
            
                <Header/>
                <Routes>
                <Route path='/' element={ <Home /> } />
                
                </Routes>
                <Footer/>
            </Router>

        
        </div>
    )
}

export default App