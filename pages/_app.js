import '../styles/global.css'
import '../styles/bulma.css'
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
    return (
    <Layout>
        <Header/>
            <Component {...pageProps} />
        <Footer/>
    </Layout>
    )
}