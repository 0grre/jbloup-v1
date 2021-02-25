import fs from 'fs'
import path from 'path'

const pagesDirectory = path.join(process.cwd(), 'pages/content')

export function getPagesName() {

    // Get file names under /content
    const fileNames = fs.readdirSync(pagesDirectory)

    // Sort page name
    return fileNames.map(fileName => {
        const name = fileName.replace(/\.js$/, '')

        return {
            name
        }
    })

}

