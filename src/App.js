
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

function App () {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Footer/>

            </Router>

        
        </div>
    )
}

export default App