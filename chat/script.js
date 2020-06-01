const socket = io("https://test-server-js-odczik.herokuapp.com")
const messageContainer = document.getElementById("message-container")
const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")

let name = document.cookie
if(!name) {
    name = prompt("Username")
    document.cookie = name
}
appendMessage(name + " joined")
socket.emit("new-user", name)

socket.on("chat-message", data => {
    appendMessage(`${data.name}: ${data.message}`)
})

socket.on("user-connected", name => {
    appendMessage(`${name} Connected`)
})

socket.on("user-disconnected", name => {
    appendMessage(`${name} Disconnected`)
})

messageForm.addEventListener("submit", e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`${name}: ${message}`)
    socket.emit("send-chat-message", message)
    messageInput.value = ""
})

function appendMessage(message) {
    const messageElement = document.createElement("div")
    messageElement.innerText = message
    messageContainer.append(messageElement)
}