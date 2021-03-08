import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config, library} from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
library.add(fas, fab);

import Link from "next/link";
import {getPagesName} from "../../lib/contents";
import {experiences, educations, present, softSkills} from "../../contents/data";

const pageName = "resume"

export default function Resume({ experiencesList, educationsList, softSkillsList, allPagesNames }) {

    return (
        <>
            <div className="tabs is-centered is-medium">
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

            <section id="about" className="section">
                <div className="container is-max-desktop mb-6">
                    <div className="content">
                        <h1 className="subtitle is-4 has-text-centered">"{present}"</h1>
                    </div>
                </div>
            </section>

            <section className="section has-background-light">
                <div className="divider title">Hard Skills</div>
                <div id="hardSkills" className="container adjust mb-6">
                    <div className="box">
                        <div className="level title">
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'php']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'laravel']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'java']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'js']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'python']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'git']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fa', 'database']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'apple']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'linux']}/>
                    </span>
                            </div>
                            <div className="level-item has-text-centered">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fab', 'windows']}/>
                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experiences" className="section">
                <div className="divider title">Expériences</div>
                <div className="container is-max-desktop mb-6">
                    <div className="box">
                        {experiencesList.map(experience  => (
                            <div className="notification">
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <h2 className="title is-4">{experience.job}</h2>
                                                <li><span className="is-italic has-text-weight-bold">{experience.society + ", "}</span><span className="">{experience.town}</span> <span className="tag is-info is-light">{experience.date}</span></li>
                                                {experience.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="softSkills" className="section has-background-light">
                <div className="divider title">Soft Skills</div>
                <div id="softskills" className="container is-max-desktop mb-6">
                    <div className="box">
                        <div className="tags are-large is-justify-content-space-between">
                            {softSkillsList.map(softskill  => (
                                <span className="tag is-success is-light">{softskill.name}</span>

                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="educations" className="section">
                <div className="divider title">Formations</div>
                <div className="container is-max-desktop mb-6">
                    <div className="box">
                        {educationsList.map(education  => (
                            <div className="notification">
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <h2 className="title is-4">{education.education}</h2>
                                                <li><span className="is-italic has-text-weight-bold">{education.university + ", "}</span><span className="">{education.town}</span> <span className="tag is-info is-light">{education.date}</span></li>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="hobbies" className="section has-background-light">
                <div className="divider title">Hobbies</div>
                <div className="container adjust mb-6">
                    <div className="box">
                        <div className="level subtitle">
                            <div className="level-item has-text-centered is-flex-direction-column">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fas', 'running']}/>
                    </span>
                                <span className="is-size-7">Course à pied</span>
                            </div>
                            <div className="level-item has-text-centered is-flex-direction-column">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fas', 'space-shuttle']}/>
                    </span>
                                <span className="is-size-7">Aérospatial - Astronomie</span>
                            </div>
                            <div className="level-item has-text-centered is-flex-direction-column">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fas', 'seedling']}/>
                    </span>
                                <span className="is-size-7">Aquariophilie - Jardinage</span>
                            </div>
                            <div className="level-item has-text-centered is-flex-direction-column">
                    <span className="icon is-large">
                        <FontAwesomeIcon icon={['fas', 'utensils']}/>
                    </span>
                                <span className="is-size-7">Gastronomie</span>
                            </div>
                        </div>
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
            experiencesList : experiences,
            educationsList : educations,
            softSkillsList : softSkills,
        }
    }
}


