export class BaseRepository {

    dispatch: CallableFunction

    constructor(dispatch:CallableFunction) {
        this.dispatch = dispatch
    }

    async save(type: string, payload: any) {
        await this.dispatch({
            type,
            payload
        })
    }

}