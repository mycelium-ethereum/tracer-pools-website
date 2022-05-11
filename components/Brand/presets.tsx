// Primary
const PrimaryWhite = "/img/brand/primary/primary-white.svg";
const PrimaryBlue = "/img/brand/primary/primary-blue.svg";
const PrimaryBlack = "/img/brand/primary/primary-black.svg";
const PrimaryBlueBG = "/img/brand/primary/primary-blue-bg.svg";
const PrimaryWhitePNG = "/img/brand/primary/primary-white.png";
const PrimaryBluePNG = "/img/brand/primary/primary-blue.png";
const PrimaryBlackPNG = "/img/brand/primary/primary-black.png";
const PrimaryBlueBGPNG = "/img/brand/primary/primary-blue-bg.svg";
// Primary class names
// const primaryLogoClassname = "w-[250px] h-[59px]";

// Stacked
const PrimaryStackedWhite =
  "/img/brand/primary-stacked/primary-stacked-white.svg";
const PrimaryStackedBlue =
  "/img/brand/primary-stacked/primary-stacked-blue.svg";
const PrimaryStackedBlack =
  "/img/brand/primary-stacked/primary-stacked-black.svg";
const PrimaryStackedBlueBG =
  "/img/brand/primary-stacked/primary-stacked-blue-bg.svg";
const PrimaryStackedWhitePNG =
  "/img/brand/primary-stacked/primary-stacked-white.png";
const PrimaryStackedBluePNG =
  "/img/brand/primary-stacked/primary-stacked-blue.png";
const PrimaryStackedBlackPNG =
  "/img/brand/primary-stacked/primary-stacked-black.png";
const PrimaryStackedBlueBGPNG =
  "/img/brand/primary-stacked/primary-stacked-blue-bg.png";
// Logomarks
const LogomarkWhite = "/img/brand/logomark/logomark-white.svg";
const LogomarkBlue = "/img/brand/logomark/logomark-blue.svg";
const LogomarkBlack = "/img/brand/logomark/logomark-black.svg";
const LogomarkBlueBG = "/img/brand/logomark/logomark-blue-bg.svg";
const LogomarkWhitePNG = "/img/brand/logomark/logomark-white.png";
const LogomarkBluePNG = "/img/brand/logomark/logomark-blue.png";
const LogomarkBlackPNG = "/img/brand/logomark/logomark-black.png";
const LogomarkBlueBGPNG = "/img/brand/logomark/logomark-blue-BG.png";
// Tracer DAO logos
const TracerDAOWhite = "/img/brand/tracer-dao/tracer-dao-white.svg";
const TracerDAOBlue = "/img/brand/tracer-dao/tracer-dao-blue.svg";
const TracerDAOBlack = "/img/brand/tracer-dao/tracer-dao-black.svg";
const TracerDAOBlueBG = "/img/brand/tracer-dao/tracer-dao-blue-bg.svg";
const TracerDAOWhitePNG = "/img/brand/tracer-dao/tracer-dao-white.png";
const TracerDAOBluePNG = "/img/brand/tracer-dao/tracer-dao-blue.png";
const TracerDAOBlackPNG = "/img/brand/tracer-dao/tracer-dao-black.png";
const TracerDAOBlueBGPNG = "/img/brand/tracer-dao/tracer-dao-blue-bg.png";
// Graphics
const AscendingDiscs = "/img/brand/graphics/ascending-discs.png";
const GeometricShapes = "/img/brand/graphics/geometric-shapes.png";
const GeometricMesh = "/img/brand/graphics/geometric-mesh.png";
const V2Text = "/img/brand/graphics/v2-text.png";
const AscendingDiscsSVG = "/img/brand/graphics/ascending-discs.svg";
const GeometricShapesSVG = "/img/brand/graphics/geometric-shapes.svg";
const GeometricMeshSVG = "/img/brand/graphics/geometric-mesh.svg";
const V2TextSVG = "/img/brand/graphics/v2-text.svg";

// Preview images (smaller filesize)
const AscendingDiscsPreview = "/img/brand/graphics/ascending-discs-preview.png";
const GeometricShapesPreview =
  "/img/brand/graphics/geometric-shapes-preview.png";
const GeometricMeshPreview = "/img/brand/graphics/geometric-mesh-preview.png";
const V2TextPreview = "/img/brand/graphics/v2-text-preview.png";
// 3D Elements
const BTCTokenPreview = "/img/brand/elements3d/btc-token-preview.png";
const LinkTokenPreview = "/img/brand/elements3d/link-token-preview.png";
const BTCTokenPNG = "/img/brand/elements3d/btc-token.png";
const LinkTokenPNG = "/img/brand/elements3d/link-token.png";

export const logos = [
  // Primary
  {
    description: "Primary Blue",
    svg: PrimaryBlue,
    png: PrimaryBluePNG,
  },
  {
    description: "Primary Black",
    svg: PrimaryBlack,
    png: PrimaryBlackPNG,
  },
  {
    description: "Primary White",
    svg: PrimaryWhite,
    png: PrimaryWhitePNG,
    grey: true,
  },
  {
    description: "Primary White on Blue BG",
    svg: PrimaryBlueBG,
    png: PrimaryBlueBGPNG,
    blue: true,
    className: "w-[250px] xl:min-w-[300px]",
  },
  // Stacked
  {
    description: "Stacked Blue",
    svg: PrimaryStackedBlue,
    png: PrimaryStackedBluePNG,
  },
  {
    description: "Stacked Black",
    svg: PrimaryStackedBlack,
    png: PrimaryStackedBlackPNG,
  },
  {
    description: "Stacked White",
    svg: PrimaryStackedWhite,
    png: PrimaryStackedWhitePNG,
    grey: true,
  },
  {
    description: "Stacked White on Blue BG",
    svg: PrimaryStackedBlueBG,
    png: PrimaryStackedBlueBGPNG,
    blue: true,
    className: "min-h-[167px]",
  },
  // DAO
  {
    description: "DAO Blue",
    svg: TracerDAOBlue,
    png: TracerDAOBluePNG,
  },
  {
    description: "DAO Black",
    svg: TracerDAOBlack,
    png: TracerDAOBlackPNG,
  },
  {
    description: "DAO White",
    svg: TracerDAOWhite,
    png: TracerDAOWhitePNG,
    grey: true,
  },
  {
    description: "DAO White on Blue BG",
    svg: TracerDAOBlueBG,
    png: TracerDAOBlueBGPNG,
    blue: true,
    className: "w-[265px] 3xl:min-w-[315px] ",
  },
  // Logomarks
  {
    description: "Logomark Blue",
    svg: LogomarkBlue,
    png: LogomarkBluePNG,
  },
  {
    description: "Logomark Black",
    svg: LogomarkBlack,
    png: LogomarkBlackPNG,
  },
  {
    description: "Logomark White",
    svg: LogomarkWhite,
    png: LogomarkWhitePNG,
    grey: true,
  },
  {
    description: "Logomark White on Blue BG",
    svg: LogomarkBlueBG,
    png: LogomarkBlueBGPNG,
    blue: true,
    className: "h-[170px] 3xl:min-h-[160px]",
    noPadding: true,
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
    png: AscendingDiscs,
    svg: AscendingDiscsSVG,
    alt: "Ascending Discs",
  },
  {
    description: "Diverging Discs",
    image: GeometricShapesPreview,
    png: GeometricShapesSVG,
    svg: GeometricShapesPreview,
    alt: "Diverging Discs",
  },
  {
    description: "Geometric Mesh",
    image: GeometricMeshPreview,
    png: GeometricMesh,
    svg: GeometricMeshSVG,
    alt: "Geometric Mesh",
  },
  {
    description: "V2 Text",
    image: V2TextPreview,
    png: V2Text,
    svg: V2TextSVG,
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
      <p>For consistency please ensure correct typography is being used</p>
    ),
  },
};

export const tags = [
  "Logos",
  "Colors",
  "Support Graphics",
  "3D Elements",
  "Typography",
  "All",
];
