
let cards=[]
let sum= 0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")

let player={
    Name:"Kirti",
    Chips : 145

}

let playerEl=document.getElementById("player-el")
playerEl.textContent= player.Name+": $" +player.Chips
function getRandomCard(){
    let randomcard=Math.floor(Math.random()*13)+1
    if(randomcard>10){
        return 10
    } else if(randomcard===1){
        return 11
     } else{
    return randomcard
}

}
function startGame(){
    isAlive=true
    let firstCard= getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    sumEl.textContent="Sum:"+sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
       cardsEl.textContent+=cards[i] +" "
    }
if (sum<21){
    message="Do you want to draw the card"
} else if(sum === 21){
    message="You've got blackjack!"
    hasBlackJack=true
} else {
    message="You're out of the game"
    isAlive=false
}
messageEl.textContent=message
}
function newCard(){
    if(isAlive===true && hasBlackJack===false ){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    
    renderGame()
}
}
// console.log(hasBlackJack)
// console.log(isAlive)

