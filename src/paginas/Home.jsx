import ListaCategorias from "../componentes/Formulario/ListaCategorias"
import Banner from "../componentes/Banner/Banner"


const Home = () =>{

    return (
        <>  
            <Banner />
            <ListaCategorias url='/categorias'/>
            
        </>
    )
    
}

export default Home