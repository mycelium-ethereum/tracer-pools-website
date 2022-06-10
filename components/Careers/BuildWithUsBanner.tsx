import Button from "@components/Shared/Buttons/Button"
import MeshDouble from "@components/Shared/Mesh/MeshDouble"

export const BuildWithUsBanner: React.FC = () => {
    return (
        <div className="relative -ml-3 flex w-full min-w-[calc(100%+24px)] flex-col items-center justify-center overflow-hidden rounded-md bg-tracer-midblue py-[22px] text-xl leading-[28px] text-white md:ml-0 lg:flex-row xl:h-[84px] xl:py-0">
            <span className="items-center text-center sm:flex">
                Build with the
                <br />
                <span className="flex items-center">
                    <img
                        src="/img/logo.svg"
                        className="mr-2 h-6 sm:mx-2"
                        alt="Tracer logo"
                    />
                    Community
                </span>
            </span>
            <Button ultralightBlueGradient className="mt-2 lg:mt-0 lg:ml-6">
                Community Page
            </Button>
            <Button ultralightBlueGradient className="mt-2 lg:ml-4 lg:mt-0">
                Open Jobs
            </Button>
            <MeshDouble />
        </div>
    )
}
