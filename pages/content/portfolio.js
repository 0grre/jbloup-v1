import Link from "next/link";
import {getPagesName} from "../../lib/contents";
import {projects} from "../../contents/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config, library} from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
library.add(fas, fab);

const pageName = "portfolio"

export default function Portfolio({allPagesNames, projectsList}) {

    return (
        <>
            <div className="tabs is-centered  is-medium">
                <ul>
                    <li>
                        <a href="/">
                            <span>Accueil</span>
                        </a>
                    </li>
                    {allPagesNames.map(({ name }) => (
                        <>
                            { name === pageName ? (
                                    <li className="is-active">
                                        <Link href={`/content/${encodeURIComponent(name)}`}>
                                            <a className="is-capitalized">{name}</a>
                                        </Link>
                                    </li>
                                ) :
                                <li>
                                    <Link href={`/content/${encodeURIComponent(name)}`}>
                                        <a className="is-capitalized">{name}</a>
                                    </Link>
                                </li>
                            }
                        </>
                    ))}
                </ul>
            </div>
            <section className="section">
                <h1 className="title is-2 has-text-centered">Projets</h1>
            </section>
            <section id="portfolio" className="section has-background-light">
                <div className="container is-max-desktop mb-6">

                        {projectsList.map(project  => (
                            <div className="box p-0">
                            <a href={project.link} className="card mb-6">
                                <div className="card-header">
                            <div className="card-image">
                            <figure className="image is-bordered">
                                <img src={project.img} alt={project.description}/>
                            </figure>
                            </div>
                            </div>
                            <div className="card-content">
                            <div className="content">
                            <p className="title has-text-centered">{project.name}</p>
                            <p className="subtitle has-text-centered">{project.date}</p>
                            </div>
                            </div>
                            </a>
                            </div>
                        ))}
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
            projectsList: projects

        }
    }
}