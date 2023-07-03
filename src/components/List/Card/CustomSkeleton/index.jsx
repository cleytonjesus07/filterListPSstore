import { Skeleton } from "@mui/material"
export default function CustomSkeleton() {
    return (
        <div className="flex h-full w-auto">
            <div className=" relative flex-1 overflow-hidden" >
                <Skeleton sx={{ background: "linear-gradient(to bottom, #3b9fd6, #133487)" }} variant={"rectangular"} width={"100%"} height={"100%"} />
            </div>
            <div className="flex flex-col flex-1 ml-2 justify-between">
                <div className="flex flex-col">
                    <Skeleton sx={{ background: "linear-gradient(to bottom, #3b9fd6, #133487)" }} variant={"rectangular"} height={30} />
                    <Skeleton sx={{ background: "linear-gradient(to bottom, #3b9fd6, #133487)" }} variant={"rectangular"} width={70} height={20} className={"my-2"} />
                </div>
                <div className="flex flex-col">
                    <Skeleton sx={{ background: "linear-gradient(to bottom, #3b9fd6, #133487)" }} variant={"rectangular"} width={40} height={20} className={"my-2"} />
                    <Skeleton sx={{ background: "linear-gradient(to bottom, #3b9fd6, #133487)" }} variant={"rectangular"} width={100} height={20} className={"my-2"} />
                </div>
            </div>
        </div>
    )
}
