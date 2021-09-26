export class Pokemon {

    private name: string = ''
    private url: string = ''
    private imageUrl: string = ''

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    getUrl(): string{
        return this.url
    }

    setUrl(url: string) {
        this.url = url
    }

    getImageUrl(): string{
        return this.imageUrl
    }

    setImageUrl(imageUrl: string) {
        this.imageUrl = imageUrl
    }

}