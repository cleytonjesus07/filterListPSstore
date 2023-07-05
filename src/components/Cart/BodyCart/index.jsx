import { useCartStore } from "../../../../Context/CartStore";
import { formatedPrice } from "../../../../utils/formatPrices";
import { motion } from "framer-motion"

const animation = {
    hide: { visibility: "hidden", opacity: 0 },
    show: { visibility: "visible", opacity: 1 }
}

export default function BodyCart({ cart }) {
    const { length } = cart;
    const removeToCart = useCartStore((state) => state.removeToCart);

    if (!length || length <= 0) {
        return <span className="block text-sm">Ainda não há nada no carrinho.</span>
    }

    return (
        <>
            <CloseButton />
            <ul className="grid grid-cols-1 gap-5">
                {cart.map(({ id, title, cover, price, platform }) => (
                    <motion.li
                        key={id}
                        className="flex flex-col  w-full border-b-[1px] last-of-type:border-b-0  pb-2 "
                        initial={animation.hide}
                        animate={animation.show}
                    >
                        <div className="flex">
                            <div className="h-20 w-20">
                                <img src={cover} className="object-cover object-top w-full h-full" />
                            </div>
                            <div className="flex-1 ml-5 flex flex-col justify-evenly ">
                                <span className="text-sm">{title}</span>
                                <span className="text-xs">{platform}</span>
                                <span className="font-semibold">{price?.current <= 0 ? "Free" : formatedPrice(price.current)}</span>
                            </div>
                        </div>
                        <div className="block text-right">
                            <button onClick={() => removeToCart(id)} className="text-sm opacity-50 hover:opacity-100">Remover</button>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </>
    )
}

function CloseButton() {
    const emptyCart = useCartStore((state) => state.emptyCart);
    return (
        <div className="text-sm text-right">
            <button onClick={emptyCart} className="opacity-60 hover:opacity-100">Remover Tudo</button>
        </div>
    )
}
