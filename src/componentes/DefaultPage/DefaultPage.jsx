import Footer from '../Footer/Footer';
import Header from '../Header/Header'

const DefaultPage = (content) => {
    return (
        <>
            <Header />
            {content}
            <Footer />
        </>
    );
}

export default DefaultPage 