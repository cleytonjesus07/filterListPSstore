import { AiOutlineSearch } from "react-icons/ai"
import { BsCart4 } from "react-icons/bs"
import { useCartStore } from "../../../Context/CartStore";

export default function TopMenu() {
    const cartLength = useCartStore((state) => state.cart.length);
    const setIsOpenCart = useCartStore((state) => state.setIsOpenCart);
    const logoPsStore = "assets/images/bag_pstore.png";
    return (
        <div className="w-full max-md:flex-col-reverse max-md:items-center flex justify-between px-10 pt-10 pb-2 bg-black bg-opacity-40 select-none">
            <div className="space-x-10 flex items-end">
                <span className="flex"><img className="w-4 h-auto mr-2" src={logoPsStore} />Store</span>
                <span className="flex  items-center"><AiOutlineSearch className="w-5 h-auto mr-2" />Search</span>
                <button onClick={() => setIsOpenCart(true)} className="flex items-center"><BsCart4 className="mr-2" />Cart <span className="ml-2 text-xs bg-white bg-opacity-30 px-1">{cartLength}</span></button>
            </div>
            <div className="max-md:mb-5">
                <span>All Games & Add-Ons <span className="bg-white bg-opacity-20 p-[.2em] px-[.5em] text-sm">20</span></span>
            </div>
        </div >
    )
}

