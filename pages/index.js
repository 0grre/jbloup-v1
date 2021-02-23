import {getSortedContentsData} from "../lib/contents";
import Link from "next/link";
import {playlist} from "../data";

export default function Home({ allContentsData, playlistList }) {
  return (
    <>
        <div className="tabs is-centered is-boxed">
            <ul>
                <li className="is-active">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
            {allContentsData.map(({ id }) => (
                <li key={id} id={id}>
                    <Link href={`/${encodeURIComponent(id)}`}>
                        <a>{id}</a>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
        <div>

            {playlistList.map(playlistList  => (
                <ul key={playlistList.id}>
                    <li>{playlistList.name}</li>
                <li>{playlistList.genre}</li>
                </ul>
            ))}

        </div>
    </>
  )
}

export function getStaticProps() {
    const allContentsData = getSortedContentsData()
    return {
        props: {
            allContentsData,
            playlistList : playlist,
        }
    }
}


