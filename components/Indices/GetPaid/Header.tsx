import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading"

const Header: React.FC<{}> = () => {
    return (
        <header className="mb-11 text-action-active md:mb-0 md:min-w-[320px] md:max-w-[320px] lg:mr-10 xl:mr-[180px] xl:min-w-[455px] xl:max-w-[455px] 4xl:mr-[225px] 4xl:min-w-[581px]">
            <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
                GET PAID FOR YOUR CREATIVITY
            </UnderlinedHeading>
            <h2 className="mb-4 max-w-[455px] text-2xl leading-[28px] 3xl:max-w-full 4xl:text-[40px] 4xl:leading-[44px]">
                <span className="inline-block text-[40px] font-light sm:leading-[44px] 4xl:text-[64px] 4xl:leading-[72px]">
                    10% of fees
                </span>
                <br />
                earned on a Perpetual Pool market get sent to the deployer of
                the price feed.
            </h2>
            <p className="max-w-[305px] text-tertiary xl:max-w-[305px]">
                The more highly demanded the data you bring on chain, the
                greater the reward.
            </p>
        </header>
    )
}

export default Header
