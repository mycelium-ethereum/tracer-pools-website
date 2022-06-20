const Header: React.FC<{}> = () => {
    return (
        <header className="mx-auto max-w-[579px] text-center 4xl:max-w-[830px]">
            <h1 className="mb-2 text-2xl leading-[30px] text-action-active lg:mb-4 lg:text-[40px] lg:leading-[48px] 4xl:text-[80px] 4xl:leading-[88px]">
                Unlock&nbsp;
                <br className="block lg:hidden" />
                market
                <br className="hidden 4xl:block" /> access
            </h1>
            <p className="mx-auto max-w-[230px] text-sm text-tertiary xs:text-base xs:leading-6 sm:max-w-[326px] lg:max-w-[473px]">
                Bring new data on-chain
                <br className="hidden sm:block lg:hidden" /> and create a
                derivative
                <br className="hidden lg:block" /> market
                <br className="hidden sm:block lg:hidden" /> in minutes via the
                Tracer Factory
            </p>
        </header>
    )
}

export default Header
