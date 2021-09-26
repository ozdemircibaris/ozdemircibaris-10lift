import PokemonDetailHandler from "../handler/PokemonDetailHandler";
import { PokemonListHandler } from "../handler/PokemonListHandler";
import { Pokemon } from "../model/Pokemon";
import PokemonDetailResponse from "../response/PokemonDetailResponse";
import { Api } from "./Api";
import { Constant } from "./Constant";

export class PokemonApi extends Api{
    async all() {
        let pokemonList = await this.get(Constant.GET_POKEMON_LIST_URL)
        let handler = await new PokemonListHandler()
        return handler.handle(pokemonList)
    }

    async show(pokemon:Pokemon) {
        let res = await this.get(pokemon.getUrl())
        let handler = await new PokemonDetailHandler()
        return handler.handle(res)
    }
}