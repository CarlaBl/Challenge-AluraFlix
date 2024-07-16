import './Footer.css'
import { Link } from 'react-router-dom'
import LogoFooter from '../img/LogoFooter.png'
import ButtonLink from '../Botones/ButtonLink'



const Footer = () =>{
    
    const estilos = {
        color: '#F5F5F5',
        backgroundColor: '#2A7AE4',
        width: '100%',
        display: 'flex',
        fontSize: '21px',
        fontWeight: '600',
        flexdirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0'
    }    

    return (
        <footer>
                <div className='footer__div'>
                    <ButtonLink id='footer__btn' className='footer__btn' to='' titulo='Nuevo Video' styles={estilos}/>
                </div>
                <img className='footer__logo' src={LogoFooter} alt="Logo AluraFlix" />
                <p className='footer__parrafo'>Sitio hecho en <strong>challenge</strong> de <span className='footer__span'>Alura Latam</span> por <span className='footer__span'>Carla Blacio</span></p>
        </footer>
    )
}

export default Footer