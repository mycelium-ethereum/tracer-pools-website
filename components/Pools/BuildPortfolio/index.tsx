import { useState } from "react"
import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading"
import PortfolioCarousel from "@components/Pools/BuildPortfolio/PortfolioCarousel"
import BuildPortfolioLottieAnim from "@components/Pools/BuildPortfolio/BuildPortfolioLottieAnim"
import { lottieFiles } from "@components/Pools/BuildPortfolio/presets"

const BuildPortfolio: React.FC<{}> = () => {
    const [position, setPosition] = useState(0)

    const updatePosition = (newPosition: number) => {
        setPosition(newPosition)
    }

    return (
        <Section
            id="section-4"
            className="h-auto bg-white py-20 4xl:h-[1000px]"
        >
            <Container className="flex flex-col-reverse justify-center xl:flex-row xl:items-center xl:justify-start 3xl:justify-center">
                <div className="relative mx-auto hidden h-[300px] w-full sm:block md:w-[640px] xl:mx-0 3xl:mr-[230px] 4xl:h-[360px] 4xl:w-[1000px]">
                    {lottieFiles.map((file, i) => (
                        <BuildPortfolioLottieAnim
                            key={i}
                            file={file}
                            position={i}
                            curPosition={position}
                            className="absolute top-1/2 left-0 w-full -translate-y-1/2"
                        />
                    ))}
                </div>
                <div className="xl:ml-[230px]">
                    <div className="text-action-active">
                        {/* Desktop - left-aligned gradient line */}
                        <UnderlinedHeading
                            lineColor="lightblue"
                            className="mb-0 hidden max-w-[377px] sm:block"
                        >
                            BUILD YOUR ON-CHAIN PORTFOLIO
                        </UnderlinedHeading>
                        {/* Mobile - centered gradient line */}
                        <UnderlinedHeading
                            lineColor="lightblue"
                            className="mb-0 block sm:hidden"
                            center
                        >
                            BUILD YOUR ON-CHAIN PORTFOLIO
                        </UnderlinedHeading>
                    </div>
                    <PortfolioCarousel updatePosition={updatePosition} />
                </div>
            </Container>
        </Section>
    )
}

export default BuildPortfolio
