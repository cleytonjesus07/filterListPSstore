import { create } from "zustand";
import products from "../data/products";
import { shallow } from "zustand/shallow";

export const useKey = create((set) => ({
    key: "games",
    categories: Object.keys(products),
    setKey: (key) => set((state) => ({ ...state, key }))
}))

let typeProducts = useKey.getState().key;

export const useGamesListStore = create((set, get) => ({
    list: products,
    currentList: products[typeProducts],
    callFilter: (term) => set((state) => filter(state, term, get().list)),
    sortList: (id) => set((state) => {
        let currentList = get().currentList;
        (Number(id) == 1) ?
            currentList = currentList.sort((backward, forward) => backward.price.current - forward.price.current)
            : currentList = currentList.sort((backward, forward) => forward.price.current - backward.price.current)
        return ({ ...state, currentList: [...currentList] });
    })
}))

useKey.subscribe((state) => useGamesListStore.setState({ currentList: products[state.key] }));


function filter(state, term, list) {
    typeProducts = useKey.getState().key;
    const filteredList = list[typeProducts].filter(({ title }) => title.toLowerCase().trim().includes(term.toLowerCase().trim()));
    return ({ ...state, currentList: filteredList })
}