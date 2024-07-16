import './Banner.css'
import { Link } from 'react-router-dom'
import Player from '../img/player.png'

const Banner = ()=>{
    return (
        <section className='banner'>
            <div className='banner__contenido container'>
                <div className='banner__texto'>
                    <div className='banner__categoria'>Front End</div>
                    <h2 className='banner__titulo'>Challenge React</h2>
                    
                    <p className='banner__descripcion'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                    <div className='banner__ver_contenedor'>
                         <Link className='banner__ver' to='https://www.youtube.com/watch?v=ov7vA5HFe6w&t' target='_blank' rel="noopener noreferrer">Ver</Link>
                    </div>
                </div>
                <div className='banner__video'>
                    <Link className to='https://www.youtube.com/watch?v=ov7vA5HFe6w&t' target='_blank' rel="noopener noreferrer">
                        <div className='banner__player' >
                            <img src={ Player } alt="Imagen Player" />
                        </div>
                    </Link>
                </div>
                
            </div>
        </section>
    )


}

export default Banner