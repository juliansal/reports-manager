import fetch from "node-fetch"


export const retrieveFileData = async (url) => {
    const response = await fetch(url)
    return response.json()
}