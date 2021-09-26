import { PokemonApi } from "../api/PokemonApi";
import { FETCH_POKES, POKES_CHANGES } from "../context/pokemonActionTypes";
import { Pokemon } from "../model/Pokemon";
import { PokemonRepository } from "../repository/PokemonRepository";


export class PokemonService extends PokemonApi {

    private repository!: PokemonRepository;

    constructor(private dispatch :CallableFunction) {
        super()
        this.repository = new PokemonRepository(dispatch)
    }

    async getPokemonList() {
        let pokemonList = await this.all()
        if (pokemonList) {
            await new Promise(async (resolve) => {
                let data = await pokemonList.getResults()

                for (let index = 0; index < data.length; index++) {
                    let p = data[index];
                    let imageUrl = await this.getPokemonImageUrl(p)
                    await p.setImageUrl(imageUrl)
                }
                resolve(true)
            })
            await this.repository.setPokeValues(FETCH_POKES, pokemonList.getResults())
            return pokemonList.getResults()
        }

    }

    async getPokemonImageUrl(pokemon: Pokemon) {

        let pokemonResponse = await this.show(pokemon)
        return pokemonResponse.getImageUrl()
    }

    swapPokes = async (pokes: any, x: any, y: any) => {
        var temp = await pokes[x];
        new Promise((resolve) => {
            pokes[x] = pokes[y];
            pokes[y] = temp;
            resolve(pokes)
        }).then(data => {
            this.repository.save(POKES_CHANGES, data)
        })
    }

}