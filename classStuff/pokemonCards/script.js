
const listOfPokemon = {
  Gengar: { hp:220, move1:"ShadowBall",move2: "Curse", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"},
    MilTank: {hp:300, move1: "Rollout", move2:"BodySlam", picture:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"},
    Garchomp: {hp:200, move1:"HyperBeam",move2: "Eathquake", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"},
    Swampert: {hp:190, move1:"hydropump",move2: "mudshot", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"},
    Phanpy: {hp:120, move1:"playrough",move2: "tackle", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"},
};

// for (singular of List) {
//     DO THIS TO EACH SINGULAR
// }

const mainContainer = document.querySelector(".mainContainer")
const keys = Object.keys(listOfPokemon)
//grab single from list
//make a pokemonCard
keys.forEach((key) => {
    
    const card = document.createElement('div')
    card.classList = "pokeCard"
    const pokeImg = document.createElement("img")
    pokeImg.classList ='pokeImg'
    const name = document.createElement('h1')
    name.classList = 'pokeName'
    const hp = document.createElement('h3')
    const move1 = document.createElement('h5')
    const move2 = document.createElement('h5')
    const button = document.createElement("button")

    pokeImg.src = listOfPokemon[key][3]
    name.innerText = key
    hp.innerText = listOfPokemon[key][0]
    move1.innerText = listOfPokemon[key][1]
    move2.innerText = listOfPokemon[key][2]
    button.innerText = `Clicking ${key}`
    const handleClick = (e)=>{
        console.log(e)
        console.log(e.target.innerText)
    }
    button.addEventListener("click",handleClick)
    card.append(name, hp, pokeImg, move1, move2, button)
    mainContainer.append(card)
});

// mainContainer.append()