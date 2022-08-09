import React, { useState, useEffect } from "react";
import { WaitlistForm, LoadingSplash, SuccessSplash } from "./states";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const POPUP_DELAY = 2000;
const postUrl = `https://xyz.us11.list-manage.com/subscribe/post?u=71f7321770f187b58dc7d4552&amp;id=53e1b02275&amp;f_id=005b8ee0f0`;

const MyceliumPopup = () => {
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const activeStyles = "pointer-events-auto opacity-100";
  const inactiveStyles = "pointer-events-none opacity-0";

  const handleClose = () => {
    setIsOpen(false);
    setHasSeenPopup();
    enableScroll();
  };

  const disableScroll = () => {
    document.documentElement.style.overflowY = "hidden";
  };

  const enableScroll = () => {
    document.documentElement.style.overflowY = "auto";
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
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <div
          className={`mycelium-modal fixed top-0 left-0 z-[51] flex h-screen w-full items-center justify-center bg-[#001100]/80 px-4 transition-opacity duration-500 md:px-0 ${
            isOpen ? activeStyles : inactiveStyles
          }`}
        >
          <div className="relative max-h-[calc(100%-40px)] w-full max-w-[644px] overflow-y-auto overflow-x-hidden rounded-lg bg-[#001700] px-8 pt-12 pb-10 font-aileron text-white md:overflow-y-hidden">
            <WaitlistForm
              userInput={userInput}
              setUserInput={setUserInput}
              handleClose={handleClose}
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
            <LoadingSplash status={status} />
            <SuccessSplash
              status={status}
              handleClose={handleClose}
              setHasSeenPopup={setHasSeenPopup}
            />
          </div>
        </div>
      )}
    />
  );
};

export default MyceliumPopup;
