import { FETCH_POKES, POKES_CHANGES } from "../context/pokemonActionTypes";

export function PokesReducer(state: any, action: any) {
  switch (action.type) {
    case FETCH_POKES:
      return {
        ...state,
        pokesValues: action.payload,
      }
    case POKES_CHANGES:
      return {
        ...state,
        pokesValues: action.payload
      }
    default:
      return state;
  }
}
