const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    alert("Virus Successfully Started")

    newWindow()
})

function newWindow(){
    let openedWindow = window.open("", '_blank', 'location=yes,height=200,width=200,scrollbars=yes,status=yes');
    openedWindow.document.body.style = "background-color: red;"
    openedWindow.focus()
    openedWindow.moveTo(0,0)
    openedWindow.addEventListener("keypress", function(){
        openedWindow.close()
        alert("Virus Deactivated")
    })
    openedWindow.addEventListener("unload", function(){
        alert("Virus Deactivated")
    })
    setInterval(function(){
        let rand = Math.floor(Math.random() * screen.width) + screen.width
        let rand2 = Math.floor(Math.random() * screen.height)
        openedWindow.moveTo(rand, rand2)

        
    }, 100)
    setInterval(function(){
        openedWindow.document.body.style = "background-color: red;"
        setTimeout(function(){ openedWindow.document.body.style = "background-color: blue;" }, 10)
    }, 20)
}