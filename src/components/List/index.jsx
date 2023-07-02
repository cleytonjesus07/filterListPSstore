import { useGamesListStore } from "../../../Context/GamesStore"
import { motion } from "framer-motion"
import Card from "./Card";
import { AnimatePresence } from "framer-motion";
import Cart from "../Cart";
import { useCartStore } from "../../../Context/CartStore";

const animations = {
    toHide: { display: "none", scale: 0 },
    toShow: { display: "initial", scale: 1 }
}

export default function List() {
    const currentList = useGamesListStore((state) => state.currentList);
    const addToCart = useCartStore((state) => state.addToCart);
    return (
        <AnimatePresence mode="wait">
            {(currentList?.length <= 0)
                ? <span className="block px-40">Nenhum título encontrado</span>
                :
                (
                    <div className="px-20 flex justify-center ">
                        <ul className=" grid max-md:grid-cols-1 grid-cols-3 ">
                            {currentList.map(({ id, cover, title, type, platform, price, available }, i) => {
                                return (
                                    <motion.li
                                        key={id}
                                        onClick={() => {
                                            if (!available) return;
                                            addToCart(currentList[i]);
                                        }}
                                        layout={"size"}
                                        transition={{ ease: "easeIn" }}
                                        initial={animations.toHide}
                                        animate={animations.toShow}
                                        exit={animations.toHide}
                                        className="bg-black bg-opacity-60 p-1 mx-2 my-5 h-40 w-[350px] hover:border-[1.5px] border-white cursor-pointer">
                                        <Card cover={cover} title={title} type={type} platform={platform} price={price} available={available} />
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }

        </AnimatePresence>
    )
}