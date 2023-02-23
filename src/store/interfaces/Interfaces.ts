export interface Pokemon {
    name:string,
    url:string,
}
export interface PokemonState {
    page:number,
    pokemons:Pokemon[],
    isLoading:boolean,
}

export interface CounterState {
    counter: number,
}

export interface User {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
