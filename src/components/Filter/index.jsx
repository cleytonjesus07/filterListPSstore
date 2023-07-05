import { BsChevronCompactDown } from "react-icons/bs"
import { useGamesListStore, useKey } from "../../../Context/KeyStore";
import firstLetterToUpperCase from "../../../utils/firstLetterToUpperCase";
import InputSearchFilter from "./InputSearch";
import { useEffect } from "react";

const sortOptions = [
    {
        title: "Menor Preço",
        id: 1
    },
    {
        title: "Maior Preço",
        id: 2
    }
]

export default function Filter({ active, setActive }) {
    const key = useKey((state) => state.key);
    const setKey = useKey((state) => state.setKey);
    const categories = useKey((state) => state.categories);
    const sortList = useGamesListStore((state) => state.sortList);
    useEffect(() => {
        sortList(1)
    }, [])
    return (
        <div className="flex justify-center items-center  px-32 w-full bg-black bg-opacity-50 border-t border-b border-white">
            <div className="relative flex items-center border-l-[1px] border-r-[1px] w-auto">
                <select defaultValue={key} className="  p-3 w-40  text-lg bg-transparent  outline-none cursor-pointer appearance-none  " onChange={({ target: { value } }) => setKey(value)}>
                    {categories.map((type, i) => <option key={i} className="bg-black " value={type}>{firstLetterToUpperCase(type)}</option>)}
                </select>
                <BsChevronCompactDown className="pointer-events-none  right-5 w-4 h-4 absolute" />
            </div>
            <InputSearchFilter active={active} setActive={setActive} />
            {key !== "demo" && (
                <div className="flex relative items-center border-l border-r  text-lg">
                    <select className="  p-3 w-40  text-lg bg-transparent  outline-none cursor-pointer appearance-none" onChange={({ target: { value } }) => sortList(value)}>
                        {sortOptions.map(({ title, id }) => <option key={id} className="bg-black" value={id}>{firstLetterToUpperCase(title)}</option>)}
                    </select>
                    <BsChevronCompactDown className="pointer-events-none  right-5 w-4 h-4 absolute" />
                </div>
            )}
        </div >
    )
}


