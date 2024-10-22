const getPokemon = async (id) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
      if (res.ok === false) return;
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

const container = document.querySelector(".pokemon-container");
const form = document.querySelector("#form");
const input = document.querySelector("#pokemon-id");

const templatePokemon = (pokemon) => {
    const { name, sprites, types, height, weight } = pokemon;
    container.innerHTML = `
    <div class="card">
      <img src="${sprites.front_default}">
      <h2>${name}</h2>
      <p>${types
        .map(
          (item) => `<span class="${item.type.name}">${item.type.name}</span> `
        ).join(" | ")}</p>
        <p class="">Altura: ${height / 10} mts</p>
        <p class="">Peso: ${weight / 10} kg</p>
    </div>
    `;
  };

  const poke = async (e) => {
    e.preventDefault();
  
    const inputValue = input.value;
    if(inputValue === '') {
      alert('no podes mandar vacio')
    }
  
    const pokemon = await getPokemon(inputValue);
    templatePokemon(pokemon)
  };

  form.addEventListener("submit", poke);


  