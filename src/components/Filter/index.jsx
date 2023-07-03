import { BsChevronCompactDown } from "react-icons/bs"
import { useKey } from "../../../Context/KeyStore";
import firstLetterToUpperCase from "../../../utils/firstLetterToUpperCase";
import InputSearchFilter from "./InputSearch";
import { useState } from "react";

const sortOptions = ["not working", "Menor Preço", "Maior Preço"]

export default function Filter({ active, setActive }) {
    const key = useKey((state) => state.key);
    const setKey = useKey((state) => state.setKey);
    const categories = useKey((state) => state.categories);

    return (
        <div className="flex justify-center items-center  px-32 w-full bg-black bg-opacity-50 border-t border-b border-white">
            <div className="relative flex items-center border-l-[1px] border-r-[1px] w-auto">
                <select defaultValue={key} className="  p-3 w-40  text-lg bg-transparent  outline-none cursor-pointer appearance-none  " onChange={({ target: { value } }) => setKey(value)}>
                    {categories.map((type, i) => <option key={i} className="bg-black " value={type}>{firstLetterToUpperCase(type)}</option>)}
                </select>
                <BsChevronCompactDown className="pointer-events-none  right-5 w-4 h-4 absolute" />
            </div>
            <InputSearchFilter active={active} setActive={setActive} />
            <div className="flex relative items-center border-l border-r  text-lg">
                <select disabled={true} defaultValue={key} className="  p-3 w-40  text-lg bg-transparent  outline-none cursor-pointer appearance-none  " >
                    {sortOptions.map((sortOption, i) => <option key={i} className="bg-black " value={sortOption}>{firstLetterToUpperCase(sortOption)}</option>)}
                </select>
                <BsChevronCompactDown className="pointer-events-none  right-5 w-4 h-4 absolute" />
            </div>
        </div>
    )
}


