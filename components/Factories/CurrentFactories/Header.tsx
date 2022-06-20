import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading"
import H2 from "@components/Factories/H2"

const Header: React.FC<{}> = () => {
    return (
        <header className="mb-10 w-full text-action-active sm:max-w-[335px] md:max-w-[424px] xl:mb-0 xl:mr-20 4xl:mr-[196px] 4xl:max-w-[385px]">
            <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
                CURRENT FACTORIES
            </UnderlinedHeading>
            <H2>Data and Pools are just the beginning.</H2>
            <p className="max-w-[373px] text-tertiary xl:max-w-[305px]">
                Help us build the future by submitting a proposal for your own
                Factory Template to the Tracer DAO.
            </p>
        </header>
    )
}

export default Header
