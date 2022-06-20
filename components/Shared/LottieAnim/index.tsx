import { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import { useOnScreen } from "hooks"

interface LottieAnimProps {
    lottieFile: any
    className?: string
    loop?: boolean
    playImmediately?: boolean
}

const LottieAnim: React.FC<LottieAnimProps> = ({
    lottieFile,
    className = "",
    loop = true,
    playImmediately = false,
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const onScreen = useOnScreen(containerRef)
    const [hasPlayed, setHasPlayed] = useState(false)
    const [instance, setInstance] = useState(null)

    useEffect(() => {
        if ((onScreen || playImmediately) && !hasPlayed) {
            let instance = lottie.loadAnimation({
                container: containerRef.current,
                renderer: "svg",
                loop: loop,
                autoplay: true,
                animationData: lottieFile,
            })
            setInstance(instance)
            setHasPlayed(true)
        }
        // Cleanup to prevent duplicate animations
    }, [onScreen])

    useEffect(() => {
        return () => instance && instance.destroy()
    }, [])

    return <div ref={containerRef} className={`lottie-anim ${className}`} />
}

export default LottieAnim
