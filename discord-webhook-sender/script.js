const webhook = document.getElementById("webhook")
const message = document.getElementById("message")
const button = document.getElementById("btn")
const button2 = document.getElementById("btn2")


// send as message
button.onclick = function(){
    let hook = webhook.value
    let msg = {
        "content": message.value,
        "username": "Ubetr0n Webhook Sender",
        "avatar_url": "https://cdn.glitch.com/893a0cc1-f2a2-42cb-a97f-5fc17a676711%2FUbetr0nLogo%20-%20Webhook%20Sender.png?v=1590392487567"
    }
    fetch(hook, {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
    webhook.value = ""
    message.value = ""
}

// send as Embed
button2.onclick = function(){
    let hook = webhook.value
    let msg = {
        "embeds": [{
            "title": "Ubetr0n Webhook Sender",
            "url": "https://webhook.odczik.tk",
            "description": "**" + message.value + "**",
            "color": 0xeeff00,
            }],
            "username": "Ubetr0n Webhook Sender",
            "avatar_url": "https://cdn.glitch.com/893a0cc1-f2a2-42cb-a97f-5fc17a676711%2FUbetr0nLogo%20-%20Webhook%20Sender.png?v=1590392487567"
    }
    fetch(hook, {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
    webhook.value = ""
    message.value = ""
}