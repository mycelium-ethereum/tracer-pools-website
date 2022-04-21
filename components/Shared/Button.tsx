import React from "react";
import PageLink from "./PageLink";

const Button: React.FC<{
  className?: string;
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
}> = ({
  className,
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
}) => {
  return (
    <button
      className={`relative flex w-max rounded-md border px-6 py-2 text-base leading-[24px] transition-all duration-500 ${
        className ? className : ""
      } 
      ${
        blueTransparent
          ? "border-action-active text-action-active hover:bg-action-active hover:text-white"
          : ""
      }
      ${
        purpleTransparent
          ? "border-tracer-purple-light text-tracer-purple-light"
          : ""
      }
      ${
        purpleGradient
          ? "btn-gradient-purple border-tracer-purple-light text-white hover:bg-tracer-purple-light"
          : ""
      } 
      ${
        darkBlueGradient
          ? "btn-gradient-blue-dark border-action-active text-white hover:text-action-active"
          : ""
      } 
      ${
        lightBlueGradient
          ? "btn-gradient-blue-light border-action-active text-white"
          : ""
      } 
      ${clear ? "btn-clear text-action-active hover:text-white" : ""}`}
      onClick={action}
    >
      {outgoingLink && (
        <a href={outgoingLink} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )}
      {link && <PageLink href={link}>{children}</PageLink>}
      {!outgoingLink && !link && <>{children}</>}
    </button>
  );
};

export default Button;