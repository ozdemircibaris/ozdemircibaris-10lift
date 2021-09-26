import { createContext, useReducer } from 'react';
import { PokesReducer } from '../reducers/pokes';

const initialPokesState = {
    pokesValues: []
}

export const PokesContext = createContext<{
    state: any;
    dispatch: any;
  }>({
    state: initialPokesState,
    dispatch: () => undefined,
  });

export function PokesContextProvider(props: any) {
  const [state, dispatch] = useReducer(PokesReducer, initialPokesState);
  const value = { state, dispatch };
  return <PokesContext.Provider value={value}>{props.children}</PokesContext.Provider>;
}