import {Pokemon} from '../model/Pokemon'
import { BaseRepository } from './BaseRepository';

export class PokemonRepository extends BaseRepository {

    async setPokeValues(type: string, payload: Array<Pokemon>) {
        await this.save(type, payload)
    }

}