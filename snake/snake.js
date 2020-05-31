const scoreText = document.getElementById("score")
const deathText = document.getElementById("death")

function Snake() {
    this.x = 0
    this.y = 0
    let totalSpeed = 1
    this.xSpeed = scale * totalSpeed
    this.ySpeed = 0
    this.total = 0
    this.tail = []
    let score = 0
    let death = 0

    this.draw = function() {
        ctx.fillStyle = "#FFFFFF"

        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
        }

        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.update = function() {

        for(let i=0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1]
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y }

        this.x += this.xSpeed
        this.y += this.ySpeed

        if(this.x > canvas.width){
            this.x = 0
        }
        if(this.x < 0){
            this.x = canvas.width
        }
        if(this.y > canvas.height){
            this.y = 0
        }
        if(this.y < 0){
            this.y = canvas.height
        }
    }

    this.changeDirection = function(direction) {
        switch(direction) {
            case "Up":
                this.xSpeed = 0
                this.ySpeed = scale * -totalSpeed
                break
            case "Down":
                this.xSpeed = 0
                this.ySpeed = scale * totalSpeed
                break
            case "Left":
                this.xSpeed = scale * -totalSpeed
                this.ySpeed = 0
                break
            case "Right":
                this.xSpeed = scale * totalSpeed
                this.ySpeed = 0
                break

            case "w":
                this.xSpeed = 0
                this.ySpeed = scale * -totalSpeed
                break
            case "s":
                this.xSpeed = 0
                this.ySpeed = scale * totalSpeed
                break
            case "a":
                this.xSpeed = scale * -totalSpeed
                this.ySpeed = 0
                break
            case "d":
                this.xSpeed = scale * totalSpeed
                this.ySpeed = 0
                break
        }
    }
    this.eat = function(fruit) {
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++
            score++
            scoreText.innerHTML = "Score: " + score
            return true
        }
        return false
    }
    this.boost = function(boost) {
        if(this.x === boost.x && this.y === boost.y){
            totalSpeed = 2
            speed = 300
            setTimeout(function(){ totalSpeed = 1, speed = 150 }, 1500)
            return true
        }
        return false
    }
    this.die = function() {
        for(let i=0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.x = 0
                this.y = 0
                this.xSpeed = scale * 1
                this.ySpeed = 0
                this.total = 0
                this.tail = []
                score = 0
                death++
                scoreText.innerHTML = "Score: " + score
                deathText.innerHTML = "Death: " + death
            }
        }
    }
}

