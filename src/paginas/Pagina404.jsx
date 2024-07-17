import './Pagina404.css'
import LogoMenu from '../componentes/img/LogoMenu.png'

const Page404 = ()=>{
    return (
        <main className="error">
            <div className='error__mensaje'>
                <h1>404</h1>
                <p>Esta página no existe</p>
                <img src={ LogoMenu } alt="Logo AluraFlix" />
            </div>

        </main>
    )
}

export default Page404