"use strict"

let dogs=[]

dogs.push({name:"Fluffy",Breed:"Poodle",Age:"3 Year",picture:"/img/Poodle.png"})
dogs.push({name:"Otto",Breed:"Chiwowa",Age:"3 Year",picture:"/img/chiwawawa.jpg"})
dogs.push({name:"Alfie",Breed:"French Bulldog",Age:"6 Year",picture:"/img/bulldog.jpg"})
dogs.push({name:"Sally",Breed:"Heinz-57",Age:"1 Year",picture:"/img/heinz57.jpg"})
dogs.push({name:"Ralph",Breed:"Flatcoat-Retreiver",Age:"2 Year",picture:"/img/flatcoatretreiver.jpg"})
dogs.push({name:"Macy",Breed:"Husky",Age:"4 Year",picture:"/img/husky.jpg"})

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour) (done)
// An image for each dog (done)
// Display Breed (done)
// Add an age property for every dog (done)
// add an 'Adopt Now' button on each dog (done)

for(let i=0;i<dogs.length;i++){

    let card = document.createElement("div")
    card.classList.add("card")
    document.getElementById("cardHolder").appendChild(card)

    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML=dogs[i].name

    let dogBreed=document.createElement("h2")
    card.appendChild(dogBreed)
    dogBreed.innerHTML=dogs[i].Breed

    let dogAge=document.createElement("h2")
    card.appendChild(dogAge)
    dogAge.innerHTML=dogs[i].Age

    let dogPic=document.createElement("img")
    card.appendChild(dogPic)
    dogPic.src=dogs[i].picture
    dogPic.classList.add("dogpic")

    let adoptNow=document.createElement("button")
    adoptNow.classList.add("button")
    adoptNow.innerHTML="Adopt Now"
    card.appendChild(adoptNow)
}