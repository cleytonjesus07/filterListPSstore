import { motion } from "framer-motion"
import { useCartStore } from "../../../Context/CartStore";
import { formatedPrice } from "../../../utils/formatPrices";
import { useEffect, useRef } from "react";
import HeaderCart from "./HeaderCart";
import BodyCart from "./BodyCart";
import FooterCart from "./FooterCart";
export default function Cart() {
    const cartRef = useRef();
    const cart = useCartStore((state) => state.cart);
    const isOpenCart = useCartStore((state) => state.isOpenCart);
    const scrollDown = useCartStore((state) => state.scrollDown);
    const scrollDownCart = () => {
        if (!scrollDown) return;
        cartRef.current.scrollBy({
            top: cartRef.current.scrollHeight
        })
    }
    const lockScrollScreen = () => {
        let scrollStatus = "";
        if (window.innerWidth <= 768) {
            scrollStatus = (isOpenCart) ? "hidden" : "auto";
            document.body.style.overflow = scrollStatus;
        }
    }
    useEffect(scrollDownCart, [cart])
    useEffect(lockScrollScreen, [isOpenCart])
    return (
        <motion.div
            ref={cartRef}
            transition={{ ease: "easeInOut" }}
            initial={{ zIndex: 1 }}
            animate={{ right: isOpenCart ? "0vw" : "-100vw" }}
            exit={{ zIndex: 0, top: 0, right: 0, width: 0, height: 0 }}
            className="h-screen fixed right-0 bg-black bg-opacity-50 top-0 w-80 max-md:w-screen max-md:px-10  p-5 overflow-y-auto space-y-4 z-50 "
        >
            <HeaderCart />
            <BodyCart cart={cart} />
            <FooterCart />
        </motion.div>
    )
}

const price = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL'
    })
}