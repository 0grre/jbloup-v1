
export default function Header(){

    return(
        <>
        <section id="header" className="hero is-large">
            <div className="hero-body">
                <p id="name" className="title is-2 has-text-centered has-text-white">
                    Jean-Baptiste Loup
                    <br/>
                    <br/>
                    <br/>
                </p>
                <p className="subtitle has-text-centered has-text-white">
                    27 ans
                </p>
                <p className="subtitle is-5 has-text-centered has-text-white">
                    Développeur Informatique
                </p>
            </div>
        </section>
            {/*<article className="message is-success fixed">
                <div className="message-header">
                    <p>E-mail&emsp;</p>
                    <button className="delete" aria-label="delete"/>
                </div>
                <div className="message-body has-text-centered">
                    <a className="title" href="mailto:https://aemail.com/qx00">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fa', 'envelope']}/>
                    </span>
                    </a>
                </div>
            </article>*/}
        </>
    )
}