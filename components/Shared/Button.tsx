import React from "react";
import PageLink from "./PageLink";

const Button: React.FC<{
  className?: string;
  action?: (payload: any) => void;
  children: string | React.ReactNode;
  gradient?: boolean;
  clear?: boolean;
  lightGradient?: boolean;
  link?: string;
  outgoingLink?: string;
}> = ({
  className,
  action,
  children,
  gradient,
  lightGradient,
  clear,
  link,
  outgoingLink,
}) => {
  return (
    <button
      className={`relative flex w-max rounded-md border border-action-active px-6 py-2 text-base leading-[24px] transition-all duration-500 ${
        className ? className : ""
      } 
      ${gradient ? "btn-gradient text-white hover:text-action-active" : ""} 
      ${
        lightGradient
          ? "btn-gradient-light text-action-active hover:text-action-active"
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
