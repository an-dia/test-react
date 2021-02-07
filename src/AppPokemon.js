import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PokemonForm from "./components/Pokemon/PokemonForm";
import PokemonInfo from "./components/Pokemon/PokemonInfo";

export default class AppPokemon extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  render() {
    const { pokemonName } = this.state;

    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>

      // <div style={{maxWidth: 1170, margin: '0 auto', padding: 20}}>
      //   {loading && <h1>Loading...</h1>}
      //   {pokemon && <div>{pokemon.name}</div>}
      // </div>
    );
  }
}
