import { setPokemons, startLoadingPokemons } from "."
import { pokemonApi } from "../../../api/pokemonApi";
import { Pokemon } from '../../interfaces/Interfaces';



export const getPokemons = (page: number = 0) => {
    return async(dispatch: any, getState: any) => {
        dispatch(startLoadingPokemons());
        // TODO: realizar peticion http
        // data-pokemons
        
        //Usar el dispatch con una peticion a un api

        // fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)
        // .then( (resp) => resp.json() )
        // .then( (datos) => dispatch( setPokemons({page:page+1, pokemon:datos.results}) ))

        //Usar el dispatch con una peticion a un api de una manera diferente

        //  const resp:Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)
        //  const data = await resp.json();
        // dispatch( setPokemons({page:page+1, pokemon:data.results as Pokemon[]}) );

        //Usando Axios para contactar con la api

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)
        //console.log(resp);
        

        dispatch( setPokemons({page:page+1, pokemon:data.results as Pokemon[]}) );

    }
}


