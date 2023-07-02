import { create } from "zustand";
import { useGamesListStore } from "./GamesStore";
import products from "../data/products";

export const useKey = create((set) => ({
    key: "games",
    categories: Object.keys(products),
    setKey: (key) => set((state) => ({ ...state, key }))
}))

export const typeProducts = useKey.getState().key;

useKey.subscribe((state) => {
    /* Listener responsável por ouvir a alteração da key e atualizar a lista de jogos */
    return useGamesListStore.setState({ currentList: products[state.key] })
});