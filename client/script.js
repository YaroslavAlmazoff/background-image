const uploadButton = document.getElementById("upload")
const changeButton = document.getElementById("change")
const fileInput = document.getElementById("file-input")
const body = document.getElementsByTagName("body")[0]

let file = ""
const url = "http://localhost:9000"

body.onload = () => {
    if(localStorage.getItem("image")) {
        body.style.backgroundImage = `url(${url}/${localStorage.getItem("image")})`
    }
}

fileInput.addEventListener("change", (e) => {
    file = e.target.files[0]
    changeButton.disabled = false
})
uploadButton.addEventListener("click", () => {
    fileInput.click()
})

changeButton.addEventListener("click", () => {
    if(file == "") return
    const reader = new FileReader()
    reader.onload = e => {
        body.style.backgroundImage = `url(${e.target.result})`
    }
    reader.readAsDataURL(file)
    const formData = new FormData()
    formData.append("file", file)
    fetch(url + "/upload", {
        method: "POST",
        body: formData
    })
    .then(response => {
        return response.text()
    })
    .then(text => {
        console.log(text)
        localStorage.setItem("image", text)
    })
})