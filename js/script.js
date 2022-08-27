const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokkemon = 1;



const fetchpokemon = async (pokemon)=>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIresponse.status===200){
            const data = await APIresponse.json();
        return data;
    }


}

const renderPokmon = async (pokemon) =>{
    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = 'O.o';
    const data = await fetchpokemon(pokemon);
    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        searchPokkemon = data.id;
        //pokemonImage.src = data.sprites.versions['generation-v']['black-white']['animated']['front_default'];
        pokemonImage.src = data.sprites.versions['generation-vi']['omegaruby-alphasapphire']['front_default'];
        //pokemonImage.src = data.sprites.versions['generation-vi']['x-y']['front_default'];
        //pokemonImage.src = data.sprites.versions['generation-vii']['ultra-sun-ultra-moon']['front_default'];
        //pokemonImage.src = data.sprites['front_default'];
        

    }else{
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found';
        pokemonNumber.innerHTML = 'T.T';
    }

}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    renderPokmon(input.value.toLowerCase());
    input.value = '';
});

buttonPrev.addEventListener('click',()=>{
    if(searchPokkemon>1){
        searchPokkemon -=1;
        renderPokmon(searchPokkemon);
    }

});
buttonNext.addEventListener('click',()=>{
    searchPokkemon +=1;
    renderPokmon(searchPokkemon);
});

renderPokmon(searchPokkemon);