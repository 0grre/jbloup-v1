import {getAllContentIds, getContentData, getSortedContentsData} from '../lib/contents'
import Link from "next/link";

export default function Content({ contentData, allContentsData }) {
    return (
        <>
            <div className="tabs is-centered is-boxed">
                <ul>
                    <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
                    </li>
            {allContentsData.map(({ id }) => (
                <>
                    { id === contentData.id ? (
                        <li className="is-active" key={id} id={id}>
                            <Link href={`/${encodeURIComponent(id)}`}>
                                <a>{id}</a>
                            </Link>
                        </li>
                            ) :
                        <li>
                            <Link href={`/${encodeURIComponent(id)}`}>
                                <a className="">{id}</a>
                            </Link>
                        </li>
                    }
                </>

            ))}
                </ul>
        </div>
        <div className="section">
            <div dangerouslySetInnerHTML={{__html: contentData.contentHtml}} />
        </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllContentIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const contentData = await getContentData(params.id)
    const allContentsData = getSortedContentsData()

    return {
        props: {
            contentData,
            allContentsData
        }
    }
}
