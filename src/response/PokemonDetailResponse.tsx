export default class PokemonDetailResponse {
    private imageUrl: string = ''

    getImageUrl() {
        return this.imageUrl
    }

    setImageUrl(imageUrl: string) {
        this.imageUrl = imageUrl
    }
}