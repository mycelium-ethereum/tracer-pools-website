import React, { useState, useEffect } from "react";
import CloseSVG from "../../static/img/general/menu-close.svg";
import Mesh from "../../static/img/home-page/popup/popup-mesh.png";
import MyceliumLogo from "../../static/img/home-page/popup/mycelium-logo.svg";

const POPUP_DELAY = 2000;
const MyceliumPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyles = "pointer-events-auto opacity-100";
  const inactiveStyles = "pointer-events-none opacity-0";

  const handleClose = () => {
    setIsOpen(false);
    setHasSeenPopup();
    enableScroll();
  };

  const disableScroll = () => {
    document.documentElement.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.documentElement.style.overflow = "auto";
  };

  const hasSeenPopup = () => {
    return window.localStorage.getItem("hasSeenPopup") === "true";
  };

  const setHasSeenPopup = () => {
    window.localStorage.setItem("hasSeenPopup", "true");
  };

  useEffect(() => {
    let timeout;
    if (!hasSeenPopup()) {
      timeout = setTimeout(() => {
        setIsOpen(true);
        disableScroll();
      }, POPUP_DELAY);
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[51] flex h-full w-full items-center justify-center bg-[#001100]/80 transition-opacity duration-500 ${
        isOpen ? activeStyles : inactiveStyles
      }`}
    >
      <div className="relative w-full max-w-[644px] overflow-hidden rounded-lg bg-[#001700] px-8 pt-12 pb-10 font-aileron text-white">
        <CloseButton handleClose={handleClose} />
        <BackgroundMesh />
        <div className="relative z-10">
          <Header />
          <Content />
          <WaitlistInput />
        </div>
      </div>
    </div>
  );
};

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
        launching Perpetual Swaps in August 2022!
      </p>
      <p className={paragraphStyles}>
        You can still trade now with Perpetual Pools here,
      </p>
      <p className={paragraphStyles}>
        PS. We're undergoing a full rebrand over the next short while. As our
        developers work behind the scenes, you may notice our content looking a
        little different.
      </p>

      <p className={paragraphStyles}>
        Are you a trader? Trade with liquidity, leverage low fees, low latency,
        Trade with Mycelium
      </p>
      <p>
        <b>Join the waitlist to be early.</b>
      </p>
    </div>
  );
};

const WaitlistInput = () => {
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setUserInput(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isValidEmail(event.target.value)) {
      console.log(userInput); // handle submit logic here
    } else {
      setError(true);
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const errorStyles = "bg-[#191203] border-[#FF5621]";
  const normalStyles = "popup-input-container bg-[#191203] border-[#098200]";

  return (
    <form
      className={`relative flex h-9 w-full items-center justify-between rounded-[4px] border transition-colors duration-300 ${
        error ? errorStyles : normalStyles
      }`}
    >
      <input
        type="email"
        className="h-full w-[300px] border-none bg-transparent px-4 py-2 text-white outline-none placeholder:text-opacity-30"
        onChange={handleChange}
        value={userInput}
        placeholder="Enter your email address"
      />
      <span
        className={`pointer-events-none absolute left-0 -bottom-6 text-sm leading-5 text-[#FF5621] transition-opacity duration-500 ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        This must be a valid email address.
      </span>
      <button
        aria-label="submit"
        type="submit"
        onClick={handleSubmit}
        className={`flex h-9 items-center justify-center rounded-[4px] border px-6 py-1.5 ${
          error
            ? "border-[#FF5621] bg-[#FF5621]"
            : "popup-button border-[#38800A]"
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default MyceliumPopup;
