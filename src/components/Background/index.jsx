import { useEffect } from "react";
import { useRef } from "react";

const videoSrc = "assets/video/background/bg_psn.mp4";

export default function Background({ mainRef }) {
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
    useEffect(() => document.body.onload = () => configVideo(), [])
    return (
        <video
            ref={videoBgRef}
            className="fixed top-0 left-0 -z-10 opacity-0 showBg"
            onPlay={({ target }) => {
                if (!target.paused) {
                    mainRef?.current.setAttribute("class", "show");
                }
            }}
        >
            <source src={videoSrc} type="video/mp4"></source>
        </video>
    )
}