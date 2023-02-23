import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Pokemon, PokemonState } from '../../interfaces/Interfaces'


// Define the initial state using that type
const initialState: PokemonState = {
  page:0,
  pokemons:[],
  isLoading:false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<{page:number, pokemon:Pokemon[]}>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemon;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions