const uploadButton = document.getElementById("upload")
const changeButton = document.getElementById("change")
const fileInput = document.getElementById("file-input")

let file = ""

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
        document.getElementsByTagName("body")[0].style.backgroundImage = `url(${e.target.result})`
    }
    reader.readAsDataURL(file)
})