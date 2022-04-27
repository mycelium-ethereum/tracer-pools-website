// Primary
const PrimaryWhite = "/img/brand/primary/primary-white.svg";
const PrimaryBlue = "/img/brand/primary/primary-blue.svg";
const PrimaryBlack = "/img/brand/primary/primary-black.svg";
const PrimaryWhitePNG = "/img/brand/primary/primary-white.png";
const PrimaryBluePNG = "/img/brand/primary/primary-blue.png";
const PrimaryBlackPNG = "/img/brand/primary/primary-black.png";

// Stacked
const PrimaryStackedWhite =
  "/img/brand/primary-stacked/primary-stacked-white.svg";
const PrimaryStackedBlue =
  "/img/brand/primary-stacked/primary-stacked-blue.svg";
const PrimaryStackedBlack =
  "/img/brand/primary-stacked/primary-stacked-black.svg";
const PrimaryStackedWhitePNG =
  "/img/brand/primary-stacked/primary-stacked-white.png";
const PrimaryStackedBluePNG =
  "/img/brand/primary-stacked/primary-stacked-blue.png";
const PrimaryStackedBlackPNG =
  "/img/brand/primary-stacked/primary-stacked-black.png";

// Logomarks
const LogomarkWhite = "/img/brand/logomark/logomark-white.svg";
const LogomarkBlue = "/img/brand/logomark/logomark-blue.svg";
const LogomarkBlack = "/img/brand/logomark/logomark-black.svg";
const LogomarkWhitePNG = "/img/brand/logomark/logomark-white.png";
const LogomarkBluePNG = "/img/brand/logomark/logomark-blue.png";
const LogomarkBlackPNG = "/img/brand/logomark/logomark-black.png";
// Tracer DAO logos
const TracerDAOWhite = "/img/brand/tracer-dao/tracer-dao-white.svg";
const TracerDAOBlue = "/img/brand/tracer-dao/tracer-dao-blue.svg";
const TracerDAOBlack = "/img/brand/tracer-dao/tracer-dao-black.svg";
const TracerDAOWhitePNG = "/img/brand/tracer-dao/tracer-dao-white.png";
const TracerDAOBluePNG = "/img/brand/tracer-dao/tracer-dao-blue.png";
const TracerDAOBlackPNG = "/img/brand/tracer-dao/tracer-dao-black.png";
// Graphics
const AscendingDiscs = "/img/brand/graphics/ascending-discs.png";
const DivergingDiscs = "/img/brand/graphics/diverging-discs.png";
const GeometricMesh = "/img/brand/graphics/geometric-mesh.png";
const V2Text = "/img/brand/graphics/v2-text.png";
// Preview images (smaller filesize)
const AscendingDiscsPreview = "/img/brand/graphics/ascending-discs-preview.png";
const DivergingDiscsPreview = "/img/brand/graphics/diverging-discs-preview.png";
const GeometricMeshPreview = "/img/brand/graphics/geometric-mesh-preview.png";
const V2TextPreview = "/img/brand/graphics/v2-text-preview.png";

// 3D Elements
const BTCTokenPreview = "/img/brand/elements3d/btc-token-preview.png";
const LinkTokenPreview = "/img/brand/elements3d/link-token-preview.png";
const BTCTokenPNG = "/img/brand/elements3d/btc-token.png";
const LinkTokenPNG = "/img/brand/elements3d/link-token.png";

export const logos = [
  {
    description: "Blue",
    svg: PrimaryBlue,
    png: PrimaryBluePNG,
  },
  {
    description: "Black",
    svg: PrimaryBlack,
    png: PrimaryBlackPNG,
  },
  {
    description: "White",
    svg: PrimaryWhite,
    png: PrimaryWhitePNG,
    black: true,
  },
  {
    description: "Blue",
    svg: PrimaryStackedBlue,
    png: PrimaryStackedBluePNG,
  },
  {
    description: "Black",
    svg: PrimaryStackedBlack,
    png: PrimaryStackedBlackPNG,
  },
  {
    description: "White",
    svg: PrimaryStackedWhite,
    png: PrimaryStackedWhitePNG,
    black: true,
  },
  {
    description: "Blue",
    svg: LogomarkBlue,
    png: LogomarkBluePNG,
  },
  {
    description: "Black",
    svg: LogomarkBlack,
    png: LogomarkBlackPNG,
  },
  {
    description: "White",
    svg: LogomarkWhite,
    png: LogomarkWhitePNG,
    black: true,
  },
  {
    description: "Blue",
    svg: TracerDAOBlue,
    png: TracerDAOBluePNG,
  },
  {
    description: "Black",
    svg: TracerDAOBlack,
    png: TracerDAOBlackPNG,
  },
  {
    description: "White",
    svg: TracerDAOWhite,
    png: TracerDAOWhitePNG,
    black: true,
  },
];

export const colours = [
  {
    description: "Primary Blue",
    hex: "#0000b0",
  },
  {
    description: "Primary Cyan",
    hex: "#00d9e9",
  },
  {
    description: "Primary Navy",
    hex: "#00005e",
  },
  {
    description: "Secondary Light Blue",
    hex: "#0094f8",
  },
  {
    description: "Secondary Mid Blue",
    hex: "#3535dc",
  },
  {
    description: "Secondary Pink",
    hex: "#bc7cff",
  },
  {
    description: "Secondary Purple",
    hex: "#7223ff",
  },
];

export const graphics = [
  {
    description: "Ascending Discs",
    image: AscendingDiscsPreview,
    download: AscendingDiscs,
    alt: "Ascending Discs",
  },
  {
    description: "Diverging Discs",
    image: DivergingDiscsPreview,
    download: DivergingDiscs,
    alt: "Diverging Discs",
  },
  {
    description: "Geometric Mesh",
    image: GeometricMeshPreview,
    download: GeometricMesh,
    alt: "Geometric Mesh",
  },
  {
    description: "V2 Text",
    image: V2TextPreview,
    download: V2Text,
    alt: "V2 Text",
  },
];

export const elements3D = [
  {
    description: "Link Token",
    image: LinkTokenPreview,
    download: LinkTokenPNG,
    alt: "Link Token",
    className: "w-[355px] h-[341px] object-cover",
  },
  {
    description: "BTC Token",
    image: BTCTokenPreview,
    download: BTCTokenPNG,
    alt: "BTC Token",
    className: "w-[315px] h-[304px] object-cover",
  },
];

export const headings = {
  logos: {
    heading: "TRACER LOGOS",
    subheading: (
      <p>
        The Primary logo is the preferred logo to use when representing Tracer
      </p>
    ),
  },
  colours: {
    heading: "BRAND COLORS",
    subheading: (
      <p>
        To ensure correct Tracer is represented correctly please ensure use of
        colors is consistent
      </p>
    ),
  },
  graphics: {
    heading: "SUPPORT GRAPHICS",
    subheading: (
      <p>Please use the support graphics when creating material for Tracer</p>
    ),
  },
  elements3D: {
    heading: "3D ELEMENTS",
    subheading: <p>Support the branding with 3d graphics</p>,
  },
  typography: {
    heading: "TYPOGRAPHY",
    subheading: (
      <p>For consistency please ensure correct typography is being used.</p>
    ),
  },
};

export const categoryInfo = [
  {
    name: "all",
    text: "All",
  },
  {
    name: "logos",
    text: "Logos",
  },
  {
    name: "colors",
    text: "Colors",
  },
  {
    name: "graphics",
    text: "Support Graphics",
  },
  {
    name: "elements3D",
    text: "3D Elements",
  },
  {
    name: "typography",
    text: "Typography",
  },
];
