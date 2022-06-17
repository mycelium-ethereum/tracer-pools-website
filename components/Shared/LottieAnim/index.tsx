import { useEffect, useRef } from "react"
import lottie from "lottie-web"
import { useOnScreen } from "hooks"

interface LottieAnimProps {
    lottieFile: any
    className?: string
    loop?: boolean
}

const LottieAnim: React.FC<LottieAnimProps> = ({
    lottieFile,
    className = "",
    loop = true,
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const onScreen = useOnScreen(containerRef)

    useEffect(() => {
        let instance = null
        if (onScreen) {
            instance = lottie.loadAnimation({
                container: containerRef.current,
                renderer: "svg",
                loop: loop,
                autoplay: true,
                animationData: lottieFile,
            })
        }
        // Cleanup to prevent duplicate animations
        return () => instance && instance.destroy()
    }, [onScreen])

    return <div ref={containerRef} className={className} />
}

export default LottieAnim
