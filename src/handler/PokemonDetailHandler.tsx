import PokemonDetailResponse from "../response/PokemonDetailResponse";

export default class PokemonDetailHandler {


    public handle(data:any): PokemonDetailResponse {
        let response = new PokemonDetailResponse()
        if (data) {
            let imageUrl = data?.sprites?.other['official-artwork']?.front_default
            response.setImageUrl(imageUrl)
        }
        return response
    }


}