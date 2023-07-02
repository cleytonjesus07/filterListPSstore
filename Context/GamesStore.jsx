import products from "../data/products";
import { create } from "zustand";
import { typeProducts, useKey } from "./KeyStore";


const filter = (state, term, list) => {
    const filteredList = list[useKey.getState().key].filter(({ title }) => title.toLowerCase().trim().includes(term.toLowerCase().trim()));
    return ({ ...state, currentList: filteredList })
}
export const useGamesListStore = create((set, get) => ({
    list: products,
    currentList: products[typeProducts],
    callFilter: (term) => set((state) => filter(state, term, get().list))
}))




