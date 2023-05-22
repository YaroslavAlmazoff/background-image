const express = require("express")
const path = require("path")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const uuid = require("uuid")

const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve("client")))
app.use(express.static(path.resolve("static")))
app.post("/upload", (req, res) => {
    const filename = uuid.v4() + ".jpg"
    const filePath = path.resolve("static", filename)
    req.files.file.mv(filePath)
    res.send(filename)
})

app.listen(9000, () => {
    console.log("Сервер работает...")
})