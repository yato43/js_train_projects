
//TODO change some values for K Q J


let cards = []
let sum = 0
let hasBlackJack = false
let isALive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let player = {
    name: 'Vadim',
    chips: 145
}



let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random()* 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isALive = true
    hasBlackJack = false
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let card of cards){
        cardsEl.textContent += card + " "
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = ('Do you want to draw a new card?')
    } else if (sum === 21) {
        message = ("Wohoo! you've got BlackJAck!")
        hasBlackJack = true
        player.chips += 50
    } else if (sum > 21) {
        message = ("you're out of the game! ")
        isALive = false
        player.chips -= 10
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ': $' + player.chips
}

function newCard(){
    if(isALive && !hasBlackJack){
        console.log('new card')
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
    
}
