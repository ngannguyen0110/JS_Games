document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [{
        name: 'pink',
        img: 'images/pink.png'
    },
    {
        name: 'cute',
        img: 'images/cute.png'
    },
    {
        name: 'eye',
        img: 'images/eye.png'
    },
    {
        name: 'gray',
        img: 'images/gray.png'
    },
    {
        name: 'purple',
        img: 'images/purple.png'
    },
    {
        name: 'yellow',
        img: 'images/yellow.png'
    },
    {
        name: 'pink',
        img: 'images/pink.png'
    },
    {
        name: 'cute',
        img: 'images/cute.png'
    },
    {
        name: 'eye',
        img: 'images/eye.png'
    },
    {
        name: 'gray',
        img: 'images/gray.png'
    },
    {
        name: 'purple',
        img: 'images/purple.png'
    },
    {
        name: 'yellow',
        img: 'images/yellow.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon =[]

// create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src','images/rainbow.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

// Check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/rainbow.png')
        cards[optionTwoId].setAttribute('src', 'images/rainbow.png')
        alert('Try it again')
    }
    cardsChosen =[]
    cardsChosenId =[]
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulations! You won"
    }
}
// flip the cards
function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500) //500 miliseconds
    }
}
createBoard()
})