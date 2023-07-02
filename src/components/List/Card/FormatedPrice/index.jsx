import { discountPrice } from "../../../../../utils/discountPrice";
import { formatedPrice } from "../../../../../utils/formatPrices";

export default function FormatedPrice({ price, available }) {

    const { current, discountPercent } = price;



    if (!available) {
        return (
            <div className="flex flex-col">
                <span className=" font-light text-gray-400">Unavailable</span>
            </div>
        )
    }

    if (!current || current <= 0 || discountPercent <= 0) {
        return (
            <div className="flex flex-col">
                <span className=" font-semibold">Free</span>
            </div>
        )
    }

    if (discountPercent) {
        return (
            <div className="flex flex-col">
                <span className="text-xs text-gray-300 line-through">{` ${formatedPrice(current)}`}</span>
                <span className=" font-semibold">{`${formatedPrice(discountPrice(discountPercent, current))}`}</span>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <span className=" font-semibold">{`${formatedPrice(current)}`}</span>
            </div>
        )
    }
}