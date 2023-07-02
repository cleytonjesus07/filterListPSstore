import { create } from "zustand";
import { discountPrice } from "../utils/discountPrice";
import { getLocalStorage, removeLocalStorage, saveLocalStorage } from "../utils/localStorage";

let showCartForFistTime = true;
export const useCartStore = create((set, get) => (
    {
        cart: (getLocalStorage("cart")) ? getLocalStorage("cart") : [],
        amount: (getLocalStorage("amount")) ? Number(getLocalStorage("amount").amount) : 0,
        setAmount: (price) => {
            const amount = get().amount + Number(price);
            set((state) => ({ ...state, amount }))
            saveLocalStorage("amount", { amount });
        },
        isOpenCart: false,
        setIsOpenCart: (open) => set((state) => ({ ...state, isOpenCart: open })),
        addToCart: (product) => {
            if (get().cart.find(({ id }) => product.id === id)) return;
            (showCartForFistTime) && get().setIsOpenCart(true);
            if (Object.hasOwn(product.price, "discountPercent")) {
                const { price } = product
                const current = discountPrice(price.discountPercent, price.current);
                product.price = { ...product.price, current }
            }
            const { id, title, cover, price, platform } = product
            const cartItem = { id, title, cover, price, platform };

            set((state) => ({ ...state, cart: [...state.cart, cartItem] }));

            get().setAmount(price.current);
            showCartForFistTime = false;
            saveLocalStorage("cart", get().cart);
        },
        removeToCart: (key) => {
            const product = get().cart.find(({ id }) => (id === key));
            const amount = (get().amount - Number(product.price.current));

            set((state) => ({ ...state, amount, cart: get().cart.filter(({ id }) => (key !== id)) }))
            saveLocalStorage("cart", get().cart);
            saveLocalStorage("amount", { amount });
        },
        emptyCart: () => {
            set((state) => ({ ...state, amount: 0, cart: [] }));
            removeLocalStorage("cart")
            removeLocalStorage("amount")
        },
    }
))

