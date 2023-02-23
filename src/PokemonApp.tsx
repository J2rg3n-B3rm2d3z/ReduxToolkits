import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./store/hooks/counterhooks";
import { getPokemons } from './store/slices/pokemon/thunks';



export const PokemonApp = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const { isLoading, page, pokemons = [] } = useAppSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />

            <span>Loading: {isLoading ? 'true' : 'false'} </span>

            {!isLoading &&
                <div>
                    <ul>

                        {pokemons.map(({ name }) => {
                            return (
                                <li key={name}>
                                    {name}
                                </li>
                            )
                        })}

                    </ul>
                    <button
                        disabled={isLoading}
                        onClick={() => dispatch(getPokemons(page))}>
                        Next
                    </button>
                    <button
                        disabled={isLoading}
                        onClick={() => dispatch(getPokemons(page))}>
                        Back
                    </button>
                </div>
            }
        </>
    )
}