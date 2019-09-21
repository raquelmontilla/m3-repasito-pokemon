const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json';

const fetchPokemon = () => {

  return (
    fetch(endpoint)
      .then(response => response.json())
  )
}

export { fetchPokemon };