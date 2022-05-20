import GitbookSVG from "@components/SVG/GitbookSVG";
import DiscourseSVG from "@components/SVG/DiscourseSVG";
import TwitterSVG from "@components/SVG/TwitterSVG";
import GithubSVG from "@components/SVG/GithubSVG";
import DiscordSVG from "@components/SVG/DiscordSVG";

export const categoryNames = [
    "Tracer DAO",
    "Products",
    "Learn",
    "Contribute",
    "Govern",
    "Connect",
];

export const desktopOrder = [
    categoryNames[0],
    categoryNames[1],
    categoryNames[2],
    categoryNames[3],
    categoryNames[4],
    categoryNames[5],
]

export const tabletOrder = [
    categoryNames[0],
    categoryNames[2],
    categoryNames[3],
    categoryNames[4],
    categoryNames[1],
    categoryNames[5],
]

export const mobileOrder = [
    categoryNames[0],
    categoryNames[2],
    categoryNames[4],
    categoryNames[3],
    categoryNames[2],
    categoryNames[5],
]

export const socialLinks = [
    {
        url: "https://docs.tracer.finance/",
        icon: GitbookSVG,
        alt: "Gitbook",
    },
    {
        url: "https://discourse.tracer.finance/",
        icon: DiscourseSVG,
        alt: "Discourse",
    },
    {
        url: "https://twitter.com/TracerDAO",
        icon: TwitterSVG,
        alt: "Twitter",
    },
    {
        url: "https://github.com/tracer-protocol",
        icon: GithubSVG,
        alt: "Github",
    },
    {
        url: "https://discord.gg/cNUtXBkmNH",
        icon: DiscordSVG,
        alt: "Discord",
    },
];

export const tracerDAOCategory = [
    {
        text: "Home",
        url: "/",
    },
    {
        text: "Research",
        url: "/learn",
    },
    {
        text: "News",
        url: "/radar",
    },
    {
        url: "/brand",
        text: "Brand Assets",
    },
    {
        text: "Privacy Policy",
        url: "/legal/privacy-policy",
    },
    {
        text: "Terms of Use",
        url: "/legal/terms-of-use",
    },
    {
        text: "Participation Agreement",
        url: "/legal/participation-agreement",
    },
    {
        text: "Interfaces Disclaimer",
        url: "/legal/interfaces-disclaimer",
    },
];

export const productCategory = [
    {
        text: "Pools",
        url: "https://pools.tracer.finance",
    },
    {
        text: "Swaps",
        url: "",
    },
    {
        text: "Strategies",
        url: "",
    },
    {
        text: "Factory",
        url: "",
    },
];

export const learnCategory = [
    {
        text: "Whitepapers",
        url: "/learn",
    },
    {
        text: "Documentation",
        url: "https://docs.tracer.finance",
    },
    {
        text: "Audits",
        url: "/radar/sigma-prime-audit-response",
    },
];

export const contributeCategory = [
    {
        text: "Open Tasks",
        url: "https://app.dework.xyz/o/tracer-dao-3vNZC9t31aghwwUQH5Hqar",
    },
    {
        text: "Careers",
        url: "/careers",
    },
    {
        text: "Bounties",
        url: "https://docs.tracer.finance/tracer-1/service-providers/bounties",
    },
    {
        text: "Contributor Docs",
        url: "https://docs.tracer.finance/tracer-1/contribute",
    },
    {
        text: "Developers",
        url: "",
    },
];

export const governCategory = [
    {
        text: "Forum (Discourse)",
        url: "https://discourse.tracer.finance/",
    },
    {
        text: "Voting (Snapshot)",
        url: "https://snapshot.org/#/tracer.eth",
    },
];

export const connectCategory = [
    {
        text: "Discord",
        url: "https://discord.gg/cNUtXBkmNH",
    },
    {
        text: "Twitter",
        url: "https://twitter.com/TracerDAO",
    },
    {
        text: "Medium",
        url: "https://medium.com/tracer-dao",
    },
    {
        text: "Mirror",
        url: "https://mirror.xyz/0xAeFedAb4bdf19F6FCA918cB66aD4ddF9cf8Eb4a9",
    },
    {
        text: "YouTube",
        url: "https://www.youtube.com/channel/UChQFEjLu4vaaS96iCRbasFg",
    },
];