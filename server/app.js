import express from "express"
import PocketBase from "pocketbase"
import moment from "moment"
import { retrieveFileData } from "./services/filesApi.js"

const app = express()
const PORT = 3000
const pb = new PocketBase('http://127.0.0.1:8090')

const extractImageData = (elements = []) => {
    let imageData

    for (let k in elements) {
        let steps = elements[k]["steps"]
        for (let j in steps) {
            if (steps[j]["embeddings"]) {
                let data = steps[j]["embeddings"][0]["data"]
                imageData = data
            }
        }
    }

    return imageData
}

app.get('/', async (req, res) => {
    const { items } = await pb.collection('reports').getList()
    let image

    for (let i in items) {
        let elements = items[i]["json_data"][0]["elements"]
        let data = extractImageData(elements)
        image = `<img class="screenshot" src="data:image/png;base64,${data}"/>`
    }
    return res.send(`<h1>Hi there</h1> <div>${image}</div>`)
})

app.get('/from-file', async (req, res) => {
    const { items } = await pb.collection('reports').getList()
    let image

    for (let i in items) {
        let json_file_name = items[i]["json_file"]
        let url = pb.files.getURL(items[i], json_file_name)
        let file_data = await retrieveFileData(url)

        for (let f in file_data) {
            let elements = file_data[f]["elements"]
            let data = extractImageData(elements)
            image = `<img class="screenshot" src="data:image/png;base64,${data}"/>`
        }
    }
    return res.send(`<h1>Hi there</h1> <div>${image}</div>`)
})

app.get('/reports', async (req, res) => {
    const { items } = await pb.collection('reports').getList(1, 50, {fields: "json_data"})
    const raw_reports = []

    for (let i in items) {
        raw_reports.push(items[i]["json_data"])
    }

    console.log(raw_reports)

    return res.json({ reports: "hi" })
})


app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
