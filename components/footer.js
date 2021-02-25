import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
    return(
        <>
            <section className="section">
                <p className="title has-text-centered">
                    <a className="" href="#header">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fa', 'arrow-circle-up']}/>
                    </span>
                    </a>
                </p>
            </section>
            <footer className="footer has-background-black-bis">
                <div className="content has-text-centered has-text-white">
                    <p>
                        Developped by <strong className="has-text-white">Jean-baptiste Loup</strong> 2021
                    </p>
                </div>
                <div className="has-text-centered">
                    <a className="has-text-white" href="https://github.com/jbloup">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'github']}/>
                    </span>
                    </a>
                    <a className="has-text-white" href="https://www.linkedin.com/in/jean-baptiste-loup-363941180/">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </span>
                    </a>
                    <a className="has-text-white" href="mailto:https://aemail.com/qx00">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fa', 'envelope']}/>
                    </span>
                    </a>
                </div>
            </footer>
        </>
    )
}