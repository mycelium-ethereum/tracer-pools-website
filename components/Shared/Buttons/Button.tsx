import React from "react";
import PageLink from "../PageLink";

const Button: React.FC<{
  className?: string;
  linkClassName?: string;
  action?: (payload: any) => void;
  children: string | React.ReactNode;
  blueTransparent?: boolean;
  purpleTransparent?: boolean;
  purpleGradient?: boolean;
  clear?: boolean;
  lightBlueGradient?: boolean;
  ultralightBlueGradient?: boolean;
  darkBlueGradient?: boolean;
  link?: string;
  outgoingLink?: string;
  download?: boolean;
}> = ({
  className,
  linkClassName,
  action,
  children,
  blueTransparent,
  purpleTransparent,
  purpleGradient,
  lightBlueGradient,
  ultralightBlueGradient,
  darkBlueGradient,
  clear,
  link,
  outgoingLink,
  download,
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
          ? "btn-gradient-blue-dark border-action-active text-white hover:bg-action-active hover:text-white "
          : ""
      } 
      ${
        lightBlueGradient
          ? "btn-gradient-blue-light border-action-active text-action-active "
          : ""
      } 
      ${
        ultralightBlueGradient
          ? "btn-gradient-blue-ultralight border-alternative-active text-white "
          : ""
      } 
      ${clear ? "btn-clear text-action-active hover:text-white " : ""}
      ${link || outgoingLink ? "p-0" : "px-6 py-2"}
      ${className ? className : ""}`}
      onClick={action}
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