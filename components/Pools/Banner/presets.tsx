import TracerPoolsSVG from "@components/SVG/TracerPoolsSVG";

export const headerInfo = {
  title: (
    <>
      Leveraged Tokens.
      <br />
      Less Overhead.
    </>
  ),
  subheading: "With a new derivative primitive.",
  button1Text: "Launch Pools",
  button2Text: "Documentation",
  Logo: TracerPoolsSVG,
  logoClassName: "h-[26px] w-[264px]",
  className: "h-[900px] 3xl:h-[1000px]",
};

export const tokenSpread = [
  {
    token: "bnb.png",
    alt: "BNB token",
    type: "short",
    containerStyles: "topToBottomAnim -left-[945px] top-[100px] w-[562px]",
    backDelay: 900,
    frontDelay: 600,
    backStyles: "top-14 left-20 -rotate-[10.87deg]",
    frontStyles: "-rotate-[10.87deg] min-w-[650px]",
  },
  {
    token: "eth.png",
    alt: "ETH token",
    type: "long",
    containerStyles:
      "topToBottomAnimSlower -left-[530px] top-[735px] w-[367px]",
    backDelay: 600,
    frontDelay: 300,
    backStyles: "[transform:matrix(-1,0.09,0.09,1,0,0)]",
    frontStyles:
      "-top-4 -left-8 [transform:matrix(-1,0.09,0.09,1,0,0)] min-w-[450px]",
  },
  {
    token: "yfi.png",
    alt: "YFI token",
    type: "long",
    containerStyles: "topToBottomAnim -left-[275px] top-[260px] w-[432px]",
    backDelay: 600,
    frontDelay: 300,
    backStyles: "rotate-[-17.5deg]",
    frontStyles: "-top-6 -left-16 rotate-[-17.5deg] min-w-[550px]",
  },
  {
    token: "uni.png",
    alt: "UNI token",
    type: "short",
    containerStyles: "topToBottomAnimSlower -left-2 top-[830px] w-[213px]",
    backDelay: 900,
    frontDelay: 600,
    backStyles: "top-0 rotate-[12.06deg]",
    frontStyles: "-left-6 -top-8 rotate-[12.06deg] min-w-[250px]",
  },
  {
    token: "btc.png",
    alt: "BTC token",
    type: "short",
    containerStyles:
      "topToBottomAnimSlower w-[600px] top-[500px] left-[150px] sm:left-[230px] sm:top-[600px] sm:w-[356px]",
    backDelay: 1200,
    frontDelay: 900,
    backStyles: "top-14 left-4 [transform:matrix(-1,0.08,0.08,1,0,0)]",
    frontStyles: "[transform:matrix(-1,0.08,0.08,1,0,0)] min-w-[420px]",
  },
  {
    token: "link.png",
    alt: "LINK token",
    type: "long",
    containerStyles:
      "topToBottomAnim left-[750px] sm:left-[680px] top-[400px] sm:top-[670px] w-[350px]",
    backDelay: 1500,
    frontDelay: 1200,
    backStyles: "[transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)_scale(-1,-1)]",
    frontStyles:
      "top-6 -left-16 [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)_scale(-1,-1)] min-w-[420px]",
  },
  {
    token: "mim.png",
    alt: "MIM token",
    type: "short",
    containerStyles:
      "topToBottomAnimSlower left-[750px] top-[850px] w-[350px] sm:top-[470px] sm:w-[408px] sm:left-[1050px]",
    backDelay: 1200,
    frontDelay: 900,
    backStyles: "top-[75px]",
    frontStyles: "-left-14 min-w-[500px]",
  },
  {
    token: "dot.png",
    alt: "DOT token",
    type: "long",
    containerStyles: "topToBottomAnim left-[1250px] top-[950px] w-[188px]",
    backDelay: 1500,
    frontDelay: 1200,
    backStyles: "[transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)]",
    frontStyles: "top-3 -left-10 rotate-[16deg] min-w-[230px]",
  },
  {
    token: "mkr.png",
    alt: "MKR token",
    type: "short",
    containerStyles:
      "topToBottomAnimSlower left-[1480px] top-[725px] w-[408px]",
    backDelay: 900,
    frontDelay: 600,
    backStyles: "top-28 rotate-[15.28deg]",
    frontStyles:
      "-left-6 [transform:matrix(-1,-0.22,-0.22,1,0,0)] min-w-[500px]",
  },
  {
    token: "bal.png",
    alt: "BAL token",
    type: "long",
    containerStyles: "topToBottomAnim left-[1530px] top-[165px] w-[504px]",
    backDelay: 600,
    frontDelay: 300,
    backStyles: "[transform:matrix(-0.99,0.12,0.12,0.99,0,0)]",
    frontStyles:
      "-top-10 -left-4 [transform:matrix(-0.99,0.12,0.12,0.99,0,0)] min-w-[620px]",
  },
];
