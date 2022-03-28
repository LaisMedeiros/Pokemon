const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCards = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', ()=>{
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

       const idPokemosSelecionados = pokemon.attributes.id.value

       const cartaoPokemonParaAbrir = document.getElementById('cartao-'+ idPokemosSelecionados)
       cartaoPokemonParaAbrir.classList.add('aberto')

       const pokemonAtivoNalistagem = document.querySelector('.ativo')
       pokemonAtivoNalistagem.classList.remove('ativo')

       const pokemonSelecionadoListagem = document.getElementById(idPokemosSelecionados)
       pokemonSelecionadoListagem.classList.add('ativo')
    })
})