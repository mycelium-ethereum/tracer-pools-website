import ParagraphBlock from "@components/Home/ParagraphBlock"
import AnimateIn from "@components/Shared/AnimateIn"
import { paragraphCopy } from "@components/Home/AccessibleMarkets/presets"

const InfoParagraphs: React.FC<{}> = () => {
    return (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:w-max lg:gap-9 2xl:grid-cols-3">
            {paragraphCopy.map((paragraph, i: number) => {
                return (
                    <AnimateIn delayLevel={3} key={i}>
                        <ParagraphBlock
                            title={paragraph.title}
                            text={paragraph.text}
                            className="border-action-active"
                        />
                    </AnimateIn>
                )
            })}
        </div>
    )
}

export default InfoParagraphs
