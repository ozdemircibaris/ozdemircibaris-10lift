import { Pokemon } from "../model/Pokemon";

export class PokemonListResponse {

    results: Array<Pokemon> = new Array<Pokemon>()

    getResults() {
        return this.results
    }

    setResults(results:Array<Pokemon>){
        this.results = results
    }

}