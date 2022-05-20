import React from "react";
import PageLink from "@components/Shared/PageLink";

type ButtonProps = {
  className?: string;
  linkClassName?: string;
  onClickAction?: (payload: any) => void;
  children: string | React.ReactNode;
  navLaunchButton?: boolean;
  blueTransparent?: boolean;
  purpleTransparent?: boolean;
  purpleGradient?: boolean;
  lightBlueGradient?: boolean;
  ultralightBlueGradient?: boolean;
  darkBlueGradient?: boolean;
  link?: string;
  outgoingLink?: string;
  download?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className,
  linkClassName,
  onClickAction,
  navLaunchButton,
  blueTransparent,
  purpleTransparent,
  purpleGradient,
  lightBlueGradient,
  ultralightBlueGradient,
  darkBlueGradient,
  link,
  outgoingLink,
  download,
  children,
}) => {
  return (
    <button
      className={`relative flex h-9 w-max items-center justify-center whitespace-nowrap rounded-[7px] border text-base leading-[24px] transition-all duration-500
      ${
        blueTransparent
          ? "border-action-active text-action-active hover:bg-action-active hover:text-white "
          : ""
      }
      ${
        purpleTransparent
          ? "border-tracer-purple-light text-tracer-purple-light "
          : ""
      }
      ${
        purpleGradient
          ? "btn-gradient-purple border-tracer-purple-light text-white hover:bg-tracer-purple-light "
          : ""
      } 
      ${
        darkBlueGradient
          ? "btn-gradient-blue-dark border-action-active text-white hover:bg-tracer-midblue hover:bg-opacity-80 hover:text-white "
          : ""
      } 
      ${
        navLaunchButton
          ? "btn-gradient-blue-dark border-action-active hover:bg-tracer-midblue hover:bg-opacity-80 hover:text-white "
          : ""
      } 
      ${
        lightBlueGradient
          ? "btn-gradient-blue-light border-action-active text-action-active hover:bg-action-active hover:text-white group-hover:bg-action-active group-hover:text-white "
          : ""
      } 
      ${
        ultralightBlueGradient
          ? "btn-gradient-blue-ultralight border-alternative-active text-white "
          : ""
      } 
      ${link || outgoingLink ? "p-0" : "px-6 py-2"}
      ${className ? className : ""}`}
      onClick={onClickAction}
    >
      {outgoingLink && (
        <a
          href={outgoingLink}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
          className="flex h-full w-auto flex-grow items-center justify-center px-6 py-2"
        >
          {children}
        </a>
      )}
      {link && (
        <PageLink
          href={link}
          className={`flex items-center justify-center px-6 py-2 ${
            linkClassName ? linkClassName : ""
          }`}
        >
          {children}
        </PageLink>
      )}
      {!outgoingLink && !link && <>{children}</>}
    </button>
  );
};

export default Button;
