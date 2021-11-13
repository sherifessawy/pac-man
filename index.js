const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let squares = []
let score = 0



//Board//
// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

function createBoard(){

    for (let i = 0; i < layout.length; i++) {

        //create a square
        const square = document.createElement('div') //this div is created in the DOM and now I can add to it a class list. it's independant from having been appended as a child or not yet. and kont batasa2l ezay el bent bt add class list mn el array msh mn el DOM bs el element el fel array da aslun howa el DOM created element so e3tbr en we have grab a hold of it from the DOM and that we can add class list to it. I hope this is clear when you check it sherif
        
        //put  square in grid
        grid.appendChild(square) //this is to define the location of this element in the DOM
        
        //put square in squares array
        squares.push(square) //array of DOM created divs
                
        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        } else if (layout[i] === 2){
            squares[i].classList.add('ghost-liar')
        }
        
    }    
}
createBoard()

//starting position of pacman//
let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add('pacman') 

function control(e) {
    // if (e.key === "ArrowDown") {
    //     console.log('pressed down')
    // } else if (e.key === "ArrowUp") {
    //     console.log('pressed up')
    // } else if (e.key === "ArrowLeft") {
    //     console.log('pressed left')
    // } else if (e.key === "ArrowRight") {
    //     console.log('pressed right')
    // }

    squares[pacmanCurrentIndex].classList.remove('pacman') //remove current pacman

    switch(e.key){ //alternative to code above for checking in case arrows are pressed
        case "ArrowDown":
            if ( pacmanCurrentIndex + width < width*width && 
                 !squares[pacmanCurrentIndex+width].classList.contains('wall') &&
                 !squares[pacmanCurrentIndex+width].classList.contains('ghost-liar')
            ) { //not at bottom wall and no wall on the way and dos not contain ghost liar
                pacmanCurrentIndex += width
            }
            break //break out of switch statment

        case "ArrowUp":
            if (pacmanCurrentIndex - width > 0 && 
                !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                !squares[pacmanCurrentIndex-width].classList.contains('ghost-liar')
            ) { //not at upper wall
                pacmanCurrentIndex -= width
            }
            break

        case "ArrowLeft":
            if (pacmanCurrentIndex % width !== 0 &&
                !squares[pacmanCurrentIndex-1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex-1].classList.contains('ghost-liar')
            ) { //not at left wall
                pacmanCurrentIndex -=1
            } else if (pacmanCurrentIndex === 364){
                pacmanCurrentIndex = 391
            }
            break
        
        case "ArrowRight":
            if (pacmanCurrentIndex % width < width-1 && 
                !squares[pacmanCurrentIndex+1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex+1].classList.contains('ghost-liar')
            ) { //not at right wall
                pacmanCurrentIndex +=1
            } else if (pacmanCurrentIndex === 391){
                pacmanCurrentIndex = 364
            }
            break
    }  
    squares[pacmanCurrentIndex].classList.add('pacman')

    pacDotEat()
    powerPelletEaten()
    checkForWin()
    
}
document.addEventListener('keydown', control) //listens to event anywhere in the doc

function pacDotEat(){
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score += 1
        document.getElementById('score').textContent = score
    }
}

function powerPelletEaten() {
    //if square pacman is in contains a power pellet
    //code 
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')){
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        //add a score of 10
        score += 10
        document.getElementById('score').textContent = score
        //change each of the four ghosts to isScared
        ghosts.forEach(ghost => ghost.isScared = true)
        //use setTimeout to unscare ghosts after 10 seconds
        setTimeout(unScareGhosts, 10000)
    }
}



// ghosts

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

//draw my ghosts onto my grid
ghosts.forEach(ghost => {
    squares[ghost.startIndex].classList.add(ghost.className)

})

ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {

    const directions = [-1, +1, -width, +width]

    ghost.timerId = setInterval(function(){
        let direction = directions[Math.floor(Math.random() * directions.length)]
        while (true){
                    if (!squares[ghost.currentIndex + direction].classList.contains('wall') && 
                    !squares[ghost.currentIndex + direction].classList.contains('blinky') &&
                    !squares[ghost.currentIndex + direction].classList.contains('pinky') &&
                    !squares[ghost.currentIndex + direction].classList.contains('inky') &&
                    !squares[ghost.currentIndex + direction].classList.contains('clyde')){
                        break
                } else{
                    direction = directions[Math.floor(Math.random() * directions.length)]
                }
        }
        squares[ghost.currentIndex].classList.remove(ghost.className, 'scared-ghost')
        ghost.currentIndex += direction
        squares[ghost.currentIndex].classList.add(ghost.className) //I have to keep this even when ghost is scared to make ghosts not run into each other

        //if the ghost is currently scared
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost') //this overide as this classlist is called later in the CSS page
        }

        if(squares[ghost.currentIndex].classList.contains('pacman') && ghost.isScared){ //instead of squares[ghost.currentIndex].classList.contains('pacman'), I tried (pacManCurrentIndex === ghost.currentIndex) this had a bug as some times the index is not the same as the one rendered at the screen. meaning if you go to while(true) loop you will see that at a given time the index is not the same as the one have tha classList of ghost.className and rendered so in this case the pacManCurrentIndex !== ghost.currentIndex while you can see in the webpage that both of them are rendered one above the other.
            console.log('eaten')
            squares[ghost.currentIndex].classList.remove('scared-ghost', ghost.className)
            ghost.currentIndex = ghost.startIndex
            score += 20
            squares[ghost.currentIndex].classList.add(ghost.className)
        }
        checkForGameOver(ghost)//passing in ghost as an arg. as it's not defined outside this function

    }, ghost.speed)

    
}

function unScareGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false)
}

function checkForGameOver(ghost) {
    //another way is to check if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost. this way we do not need to pass ghost to this function
    if(squares[ghost.currentIndex].classList.contains('pacman') && !ghost.isScared){
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keydown', control)
        document.getElementById('title').textContent = "YOU LOSE"
    }
}

//check for win
function checkForWin() {
    // wins if score > 273
    if (score >= 273) {
        //stop each ghost
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        //remove the eventListener for the control function
        document.removeEventListener('keydown', control)
        //tell our user we have won
        scoreDisplay.innerHTML = 'You WON!'
    }
}