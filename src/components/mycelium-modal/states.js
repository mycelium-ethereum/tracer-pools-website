import React, { useEffect } from "react";
import cx from "classnames";
import { WaitlistInput } from "./waitlist-input";
import TickSVG from "../../../static/img/home-page/popup/tick.svg";
import MyceliumLogo from "../../../static/img/home-page/popup/mycelium-logo.svg";
import MyceliumLogoGreen from "../../../static/img/home-page/popup/mycelium-logo-green.svg";
import CloseSVG from "../../../static/img/general/menu-close.svg";
import Mesh from "../../../static/img/home-page/popup/popup-mesh.png";

const CloseButton = ({ handleClose }) => (
  <button className="absolute top-7 right-7 z-10" onClick={handleClose}>
    <img src={CloseSVG} alt="Close" className="h-3 w-3" />
  </button>
);

const BackgroundMesh = () => (
  <img
    src={Mesh}
    alt="Background mesh"
    className="absolute top-0 right-0 h-[496px] w-[533px]"
  />
);

export const WaitlistForm = ({
  userInput,
  setUserInput,
  handleClose,
  message,
  status,
  onValidated,
}) => (
  <>
    <CloseButton handleClose={handleClose} />
    <BackgroundMesh />
    <div className="relative z-10">
      <Header />
      <Content />
      <WaitlistInput
        userInput={userInput}
        setUserInput={setUserInput}
        message={message}
        status={status}
        onValidated={onValidated}
      />
    </div>
  </>
);

const Header = () => (
  <header className="mb-6 flex flex-col items-center justify-center">
    <h1 className="mb-2 text-center font-aileron text-[40px] font-normal leading-[48px]">
      Tracer is evolving into
    </h1>
    <img src={MyceliumLogo} />
  </header>
);

const Content = () => {
  const paragraphStyles = "mb-4";

  return (
    <div className="mb-6">
      <p className={paragraphStyles}>
        We’re integrating with our core service provider Mycelium to expand our
        exchange platform and build the best trading experience in DeFi,
        launching <b>Perpetual Swaps</b> in August 2022!
      </p>
      <p className={paragraphStyles}>
        You can still trade now with Perpetual Pools{" "}
        <a
          href="https://pools.tracer.finance/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          here
        </a>
        .
      </p>
      <p className={paragraphStyles}>
        If you are a TCR holder, you can convert your TCR to MYC 1:1{" "}
        <a
          href="https://migrate.mycelium.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          here
        </a>
        .
      </p>
      <p className={paragraphStyles}>
        P.S. We're undergoing a full rebrand over the next short while. As our
        developers work behind the scenes, you may notice our content looking a
        little different.
      </p>

      <p className={paragraphStyles}>
        Are you a trader? Trade with liquidity, leverage, low fees, trade with
        Mycelium
      </p>
      <p className="underline">
        <b>Join the waitlist to be early.</b>
      </p>
    </div>
  );
};

export const LoadingSplash = ({ status }) => (
  <div
    className={cx(
      "absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-[#001700] px-8 pt-12 pb-10 transition-opacity",
      {
        "pointer-events-none opacity-0":
          status !== "sending" && status !== "success",
        "pointer-events-auto opacity-100":
          status === "sending" || status === "success",
      }
    )}
  >
    <svg
      version="1.1"
      id="L9"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      className="mx-auto h-20 w-20"
    >
      <path
        fill="#9ADA9A"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

export const SuccessSplash = ({ status, handleClose, setHasSeenPopup }) => {
  // Do not show popup if user reloads page after submitting
  useEffect(() => {
    if (status === "success") setHasSeenPopup();
  }, [status]);

  return (
    <div
      className={cx(
        "absolute top-0 left-0 z-30 h-full w-full bg-[#001700] transition-opacity duration-300",
        {
          "pointer-events-none opacity-0": status !== "success",
          "pointer-events-auto opacity-100": status === "success",
        }
      )}
    >
      <CloseButton handleClose={handleClose} />
      <BackgroundMesh />
      <div className="relative z-10 flex flex-col items-center px-8 pt-[14px] pb-10">
        <img src={TickSVG} alt="Tick" />
        <SuccessHeader />
        <GradientCloseButton onClick={handleClose} />
      </div>
    </div>
  );
};

const SuccessHeader = () => (
  <header className="mb-6 text-center">
    <h1 className="mb-8 text-[40px] leading-[48px] [font-weight:400]">
      Thank you for signing up to the waitlist!
    </h1>
    <span className="text-2xl leading-[150%]">We can't wait for you</span>
    <div className="mx-auto mt-2 flex w-max items-center text-2xl leading-[150%]">
      <span>Trade with</span>{" "}
      <img
        src={MyceliumLogoGreen}
        alt="Mycelium logo"
        className="ml-2 h-[26px] w-[122px]"
      />
    </div>
  </header>
);

const GradientCloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center rounded-[4px] border border-[#38800A] px-6 py-1.5 [background:linear-gradient(267.35deg,#38800A_-63%,rgba(56,128,10,0)233.88%)]"
  >
    <span>Close</span>
  </button>
);
