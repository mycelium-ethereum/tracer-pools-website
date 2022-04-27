import React from "react";
import PageLink from "./PageLink";

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
  darkBlueGradient,
  clear,
  link,
  outgoingLink,
  download,
}) => {
  return (
    <button
      className={`relative flex h-max w-max whitespace-nowrap rounded-md border text-base leading-[24px] transition-all duration-500
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
          ? "btn-gradient-blue-dark border-action-active text-white hover:text-action-active "
          : ""
      } 
      ${
        lightBlueGradient
          ? "btn-gradient-blue-light border-action-active text-action-active "
          : ""
      } 
      ${clear ? "btn-clear text-action-active hover:text-white " : ""}
      ${link ? "p-0" : "px-6 py-2"}
      ${className ? className : ""}`}
      onClick={action}
    >
      {outgoingLink && (
        <a
          href={outgoingLink}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
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
