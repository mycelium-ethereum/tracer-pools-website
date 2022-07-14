import DiscordSVG from "@components/SVG/DiscordSVG"
import DiscourseSVG from "@components/SVG/DiscourseSVG"
import GitbookSVG from "@components/SVG/GitbookSVG"
import GithubSVG from "@components/SVG/GithubSVG"
import SnapshotSVG from "@components/SVG/SnapshotSVG"
import TwitterSVG from "@components/SVG/TwitterSVG"

export const appButtonContent = [
    {
        image: "/img/shared/navbar/placeholder-bg.png",
        logo: "/img/logo.svg",
        logoClassName: "h-[17px] w-[72px]",
    },
    {
        image: "/img/shared/navbar/placeholder-bg.png",
        logo: "/img/logos/tracer-perpetual-pools-stacked.svg",
        logoClassName: "h-[30px] w-[100px]",
    },
    {
        image: "/img/shared/navbar/placeholder-bg.png",
        logo: "/img/logos/tracer-data-feeds-stacked.svg",
        logoClassName: "h-[26px] w-[71px]",
    },
    {
        image: "/img/shared/navbar/placeholder-bg.png",
        logo: "/img/logos/tracer-factories-stacked.svg",
        logoClassName: "h-[26px] w-[59px]",
    },
]

export const linkContent = [
    {
        LinkImage: GithubSVG,
        imgClassName: "h-6 w-6",
        label: "Github",
        link: "https://github.com/tracer-protocol"
    },
    {
        LinkImage: SnapshotSVG,
        imgClassName: "h-[19px] w-[17px]",
        label: "Snapshot",
        link: "https://snapshot.org/#/tracer.eth"
    },
    {
        LinkImage: GitbookSVG,
        imgClassName: "h-[17px] w-[24px]",
        label: "User Documentation",
        link: "https://docs.tracer.finance/tracer-docs-portal/readme"
    },
]

export const socialLinkContent = [
    {
        LinkImage: DiscourseSVG,
        link: "https://discourse.tracer.finance/",
    },
    {
        LinkImage: TwitterSVG,
        link: "https://twitter.com/TracerDAO",
    },
    {
        LinkImage: DiscordSVG,
        link: "https://discord.com/invite/tracerdao",
    },
]