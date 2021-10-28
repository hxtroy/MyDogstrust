"use strict"

let dogs=[]


function setupDogs(){
    dogs.push(new Dog("Fluffy","Poodle","3 Year","/img/Poodle.png"))
    dogs.push(new Dog("Otto","Chiwowa","3 Year","/img/chiwawawa.jpg"))
    dogs.push(new Dog("Alfie","French Bulldog","6 Year","/img/bulldog.jpg"))
    dogs.push(new Dog("Sally","Heinz-57","1 Year","/img/heinz57.jpg"))
    dogs.push(new Dog("Ralph","Flatcoat-Retreiver","2 Year","/img/flatcoatretreiver.jpg"))
    dogs.push(new Dog("Macy","Husky","4 Year","/img/husky.jpg"))
}
//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour) (done)
// An image for each dog (done)
// Display Breed (done)
// Add an age property for every dog (done)
// add an 'Adopt Now' button on each dog (done)


function showDogs(){

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
}

class Dog{
    name
    Breed
    Age
    picture

    constructor(name,Breed,Age,picture){
        this.name=name
        this.Breed=Breed
        this.Age=Age
        this.picture=picture
    }
    

}

setupDogs()
showDogs()