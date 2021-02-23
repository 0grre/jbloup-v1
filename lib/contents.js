import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const contentsDirectory = path.join(process.cwd(), 'contents')

export function getSortedContentsData() {
    // Get file names under /contents
    const fileNames = fs.readdirSync(contentsDirectory)

    const allContentsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(contentsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the content metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by date
    return allContentsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllContentIds() {
    const fileNames = fs.readdirSync(contentsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getContentData(id) {
    const fullPath = path.join(contentsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the content metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
