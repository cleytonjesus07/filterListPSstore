import { useCartStore } from "../../../../Context/CartStore";
import { formatedPrice } from "../../../../utils/formatPrices";

export default function FooterCart() {
    const amount = useCartStore((state) => state.amount);
    return (
        <div className="py-5 flex gap-2 items-center justify-between border-t-2">
            <span className="font-bold">Valor:</span>
            <span>{formatedPrice(amount)}</span>
        </div>
    )
}