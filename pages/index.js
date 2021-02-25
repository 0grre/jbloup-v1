import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import {config, library} from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
library.add(fas, fab);

import {getPagesName} from "../lib/contents";
import Link from "next/link";


export default function Home({ allPagesNames}) {

  return (
    <>
        <div id="tabsHome" className="tabs is-centered  is-medium">
            <ul>
                <li  className="is-active" >
                    <a href="/">
                        <span>Home</span>
                    </a>
                </li>
                {allPagesNames.map(({ name }) => (
                            <li>
                                <Link href={`/content/${encodeURIComponent(name)}`}>
                                    <a className="is-capitalized">{name}</a>
                                </Link>
                            </li>
                ))}
            </ul>
        </div>
        <section id="about" className="section">
                <div className="container is-max-desktop mb-6">
                    <div className="notification is-success is-light">
                        <h1 className="subtitle has-text-centered">Pré-inscrit au CESI de Lille (Bac +3),<br/> disponible pour un contrat en alternance à partir de septembre 2021</h1>
                    </div>
                </div>
            <div id="about" className="container is-max-desktop">
                    <div className="columns is-7">
                        <div className="column">
                            <div className="content">
                        <h1>À propos</h1>
                        <p className="has-text-justified">
                            Après avoir décidé de me réorienter dans le secteur du développement informatique en 2019, je suis désormais déterminé à atteindre mon objectif, qui est de devenir <strong>développeur full stack.</strong>
                            <br/>
                            <br/>
                            Arrivant bientôt au terme de ma formation d'analyste programmeur au CESI de Lille, je me suis inscrit au <strong>Bachelor Responsable en Ingénierie des Logiciels (Bac +3)</strong> pour l'année <strong>2021/2022</strong> au CESI de Lille.
                            <br/>
                            <br/>
                            Pour cette troisième année d'alternance, je suis à la recherche d'une entreprise qui saura me faire grandir dans le domaine du développement informatique mais également dans la gestion de projet.
                            <br/>
                            <br/>
                            De mon côté je saurai démontrer ma <strong>motivation</strong>, ma <strong>prise d'initiative</strong> et être <strong>force de proposition</strong>.
                        </p>
                    </div>
                        </div>
                        <div className="column is-one-third">
                        <div className="box p-0">
                            <figure className="image">
                                <img src="/img/profil.jpg"/>
                            </figure>
                        </div>
                        </div>
                </div>
                </div>
        </section>
        <div className="divider subtitle">Informations</div>
        <div id="infos" className="container is-max-desktop mb-6">
            <div className="level is-mobile subtitle">
                <div className="level-item is-flex-direction-column">
                    <a href="https://github.com/jbloup">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'github']}/>
                    </span>
                    </a>
                    <span className="is-size-7">Github</span>
                </div>
                <div className="level-item is-flex-direction-column is-large">
                    <a href="https://www.linkedin.com/in/jean-baptiste-loup-363941180/">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </span>
                    </a>
                    <span className="is-size-7">LinkedIn</span>
                </div>
                <div className="level-item is-flex-direction-column">
                    <a href="mailto:https://aemail.com/qx00">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fa', 'envelope']}/>
                    </span>
                    </a>
                    <span className="is-size-7">E-mail</span>
                </div>
                <div className="level-item is-flex-direction-column">
                    <a>
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fas', 'car']}/>
                    </span>
                    </a>
                    <span className="is-size-7">Véhiculé</span>
                </div>
                <div className="level-item is-flex-direction-column">
                    <a>
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fas', 'home']}/>
                    </span>
                    </a>
                    <span className="is-size-7">Lille</span>
                </div>
            </div>
        </div>

        <section id="resume" className="section is-medium has-background-light">
            <div className="container is-max-desktop">
                <div className="hero-head">
                    <h2 className="title has-text-centered">Parcours Professionnel</h2>
                </div>
                <div className="hero-body">
                <p className="has-text-centered">Pour voir mon parcours c'est par ici &rarr; <a href="/content/resume">Resume</a>, sinon pour obtenir la version pdf cliquez sur le bouton ci-dessous.</p>
                <p className="has-text-centered  mt-6">
                        <button className="button is-medium">
                            <a href="/jbloupCV2021.pdf" download="/jbloupCV2021.pdf">
                            Télécharger CV&emsp;
                            <span className="icon is-large">
                                <FontAwesomeIcon icon={['fa', 'download']}/>
                            </span>
                            </a>
                        </button>
                </p>
                </div>
            </div>
        </section>
        <section id="skills" className="section is-medium dark-blue">
            <div className="hero-head">
                <h2 className="title has-text-centered has-text-white">Compétences</h2>
            </div>
            <div className="hero-body">
            <div className="container is-max-desktop">
                <nav className="level is-mobile has-text-white title">
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'php']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'laravel']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'java']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'js']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'python']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'git']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fa', 'database']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'apple']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'linux']}/>
                    </span>
                    </div>
                    <div className="level-item">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'windows']}/>
                    </span>
                    </div>
                </nav>
            </div>
            </div>
        </section>
        <section id="portfolio" className="section is-medium">
            <div className="hero-head">
                <h2 className="title has-text-centered">Portfolio</h2>
            </div>
            <div className="hero-body">
                <p className="has-text-centered">Pour voir mes derniers projets c'est par ici &rarr; <a href="/content/portfolio">Portfolio</a>, vous pouvez également suivre mon travail sur <a href="https://github.com/jbloup" >Github</a>.</p>
                <div className="container is-max-desktop mt-6 box">

                    <figure className="image is-16by9">
                        <iframe className="has-ratio is-fullwidth" src="https://www.franckmalecki.com" frameBorder="0" allowFullScreen/>
                    </figure>
                    <p className="has-text-centered mt-2">Un de mes projets en production, un site vitrine avec formulaire de contact.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export function getStaticProps() {
    const allPagesNames = getPagesName()
    return {
        props: {
            allPagesNames,
        }
    }
}

