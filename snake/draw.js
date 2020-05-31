const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")
const scale = 10

const rows = canvas.height / scale
const column = canvas.width / scale

var snake

(function setup() {

    snake = new Snake()
    fruit = new Fruit()
    fruit.pickLocation()
    boost = new Boost()
    boost.pickLocation()

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw()
        boost.draw()
        snake.update()
        snake.draw()

        if(snake.eat(fruit)){
            fruit.pickLocation()
        }

        if(snake.boost(boost)){
            boost.pickLocation()
        }

        if(snake) {
            snake.die()
        }
    }, 150)
}())

window.addEventListener("keydown", (evt) => {
    const direction = evt.key.replace("Arrow", "")
    snake.changeDirection(direction)
})