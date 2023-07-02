import { BsCart4 } from "react-icons/bs";
import { useCartStore } from "../../../../Context/CartStore";

export default function HeaderCart() {
    const setIsOpenCart = useCartStore((state) => state.setIsOpenCart)
    return (
        <div className="flex justify-between py-5 border-b-2">
            <div className="flex  items-center gap-2">
                <BsCart4 />
                <span className="font-bold">Meu Carrinho</span>
            </div>
            <button className="justify-self-end text-xl opacity-70 hover:opacity-100" onClick={() => setIsOpenCart(false)}>X</button>
        </div>
    )
}