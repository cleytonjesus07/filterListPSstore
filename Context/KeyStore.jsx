import { create } from "zustand";
import products from "../data/products";

export const useKey = create((set, get) => ({
    key: "games",
    categories: Object.keys(products),
    setKey: (key) => set((state) => ({ ...state, key }))
}))

let typeProducts = useKey.getState().key;

export const useGamesListStore = create((set, get) => ({
    list: products,
    currentList: products[typeProducts],
    callFilter: (term) => set((state) => filter(state, term, get().list))
}))

useKey.subscribe((state) => {
    /* Listener responsável por ouvir a alteração da key e atualizar a lista de jogos */
    return useGamesListStore.setState({ currentList: products[state.key] })
});





function filter(state, term, list) {
    typeProducts = useKey.getState().key;
    const filteredList = list[typeProducts].filter(({ title }) => title.toLowerCase().trim().includes(term.toLowerCase().trim()));
    return ({ ...state, currentList: filteredList })
}