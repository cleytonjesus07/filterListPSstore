import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const videoSrc = "assets/video/background/bg_psn.mp4";
const imageSrc = "assets/images/bg_pic.jpg";

export default function Background({ mainRef }) {
    const [backup, setBackup] = useState(false)
    const videoBgRef = useRef();

    const configVideo = () => {
        videoBgRef.current.style.width = "100%"
        videoBgRef.current.style.height = "100vh"
        videoBgRef.current.style.objectFit = "cover"
        videoBgRef.current.autoplay = true;
        videoBgRef.current.loop = true;
        videoBgRef.current.muted = true;
        return;
    }
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setBackup(true);
            return;
        }
        document.body.onload = () => configVideo()
    }, [])

    useEffect(() => mainRef?.current.setAttribute("class", "show"), [backup])

    if (backup) {
        return (
            <div className="fixed -z-10 top-0 left-0 right-0 bottom-0  w-full h-screen showBg">
                <img className="w-full h-full object-cover" src={imageSrc} />
            </div>
        )
    }


    return (
        <video
            ref={videoBgRef}
            className="fixed top-0 bottom-0 right-0 left-0 -z-10 invisible showBg"
            onCanPlay={() => mainRef?.current.setAttribute("class", "show")}
            onError={() => setBackup(true)}
            onAbort={() => setBackup(true)}
            onStalled={() => setBackup(true)}
            onEmptied={() => setBackup(true)}

        >
            <source src={videoSrc} type="video/mp4"></source>
        </video>
    )
}