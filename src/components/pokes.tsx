import { useContext, useEffect } from "react";
import { PokesContext } from "../context/appState";
import { PokemonService } from "../services/PokemonService";
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from "react-sortable-hoc";
import '../css/pokes.css'

export default function Pokes() {
  const { state, dispatch } = useContext(PokesContext);
  let pokemonService = new PokemonService(dispatch)
  const { pokesValues } = state;

  useEffect(() => {
    if(pokesValues.length === 0) {
      pokemonService.getPokemonList()
    }
  }, [state, dispatch])

  const Handle = SortableHandle(({ tabIndex, item }: { tabIndex: any, item: any }) => {
    return (
      <div id='pokeCardContainer' className='border-2 rounded-md shadow-lg h-40 w-40 m-3'>
        <img
          id='pokeCardIcon'
          tabIndex={tabIndex}
          className='h-24 w-24 place-self-center'
          src={item.imageUrl} />
        <p className='text-center'> { item.name} </p>
      </div>
    )
  })

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
    pokemonService.swapPokes(pokesValues, oldIndex, newIndex)
  };
  const SortableList = SortableContainer((props: any) => {
    const { items, ...restProps } = props;
    return (
      <div className="container mx-auto grid grid-cols-4 gap-4 justify-items-center pt-5">
        {items.map((item: any, index: any) => (
          <SortableItem
            key={`item-${item.name}`}
            index={index}
            value={item}
            {...restProps}
          />
        ))}
      </div>
    );
  });
  const SortableItem = SortableElement((props: any) => {
    const { value: item } = props;
    return (
    <div>
      {props.shouldUseDragHandle && <Handle item={item} tabIndex={undefined} />}
    </div>
    );
  });
  return (
    <SortableList
      shouldUseDragHandle={true}
      useDragHandle
      axis="xy"
      items={pokesValues}
      onSortEnd={onSortEnd} />
  );
}