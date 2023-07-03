
import CustomSkeleton from "./CustomSkeleton";
import FormatedPrice from "./FormatedPrice";

export default function Card(props) {

    if (!props || !props.cover) {
        return <CustomSkeleton />
    }

    return <Content props={props} />
}

function Content({ props }) {
    const { cover, title, type, platform, price, status, available } = props;
    return (
        <div className="flex h-full w-auto">
            <div className=" relative flex-1 overflow-hidden" >
                {price?.discountPercent && <span className="absolute top-1 right-2 text-sm bg-gradient-to-tr from-yellow-600 to-yellow-400 px-1 rounded-sm font-semibold">{`${price?.discountPercent}%`}</span>}
                <img className="w-full h-full object-cover object-top z-0" src={cover} />
                {status && <span className="absolute bottom-0 left-2 text-sm bg-blue-700 mb-1 px-1 rounded-sm">{status}</span>}
            </div>
            <div className="flex flex-col flex-1 ml-2 justify-between">
                <div className="flex flex-col">
                    <span className="text-xl mb-2">{title}</span>
                    <div className="flex items-center">
                        <span className="block h-full w-1 mr-1 bg-blue-500"></span>
                        <span className="text-sm text-gray-300 tag">{type}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-300 font-thin text-sm mb-1">{platform}</span>
                    <FormatedPrice price={price} available={available} />
                </div>
            </div>
        </div>
    )
}





