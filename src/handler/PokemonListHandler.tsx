import { Pokemon } from "../model/Pokemon"
import { PokemonListResponse } from "../response/PokemonListResponse"

export class PokemonListHandler {

    public handle(data:any): PokemonListResponse {
        let response = new PokemonListResponse()
        if (data) {
            let pokemonList = new Array<Pokemon>()
            data.results.forEach((p :any) => {
                let pokemon = new Pokemon()
                pokemon.setName(p.name)
                pokemon.setUrl(p.url)
                pokemonList.push(pokemon)
                response.setResults(pokemonList)
            });
        }
        return response
    }

}