import { motion } from "framer-motion";
import { useGamesListStore } from "../../../../Context/KeyStore";
import { useRef } from "react";
import { useState } from "react";

const animation = {
    toHide: { top: "-100vh" },
    toShow: { top: 0 }
}



export default function InputSearchFilter({ active, setActive }) {
    let idTimeout = useRef();
    const callFilter = useGamesListStore((state) => state.callFilter);
    const [searching, setSearching] = useState(false);
    function filterTimeout(value) {
        setSearching(true);
        const later = () => {
            clearTimeout(idTimeout.current);
            callFilter(value);
            setSearching(false);
        };

        clearTimeout(idTimeout.current);
        idTimeout.current = setTimeout(later, 500);
    }

    return (
        <motion.div
            className="fixed  w-[95%] z-50  top-0 bg-black bg-opacity-80 py-14 px-20 rounded-bl-md rounded-br-md overflow-hidden"
            animate={active ? animation.toShow : animation.toHide}
            transition={{ ease: "linear", duration: .5 }}
        >
            <button onClick={() => setActive(false)} className="absolute top-3 right-5 opacity-50 hover:opacity-100 !cursor-pointer text-xl">X</button>
            <input onChange={({ target: { value } }) => filterTimeout(value)} className="bg-transparent !cursor-text border-b-[1px] border-gray-400 hover:border-gray-50 transition-all ease-linear w-full outline-none" placeholder="Pesquisar por título" />
            <div className={`w-full flex justify-center items-center space-x-5 pt-5 ${searching ? "visible" : "invisible"}`}>
                <span className="bg-white w-1 h-1 rounded-full animate-bounce" id="left-ball"></span>
                <span className="bg-white w-1 h-1 rounded-full animate-bounce" id="center-ball"></span>
                <span className="bg-white w-1 h-1 rounded-full animate-bounce" id="right-ball"></span>
            </div>
        </motion.div>
    )
}
