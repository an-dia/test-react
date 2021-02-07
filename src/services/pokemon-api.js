function fetchPokemon(nextName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(`Всё пропало, нет покемона с именем ${nextName}`)
      );
    }
  );
}

const api = {
  fetchPokemon,
};

export default api;
