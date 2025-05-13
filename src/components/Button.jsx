import React from "react";

const Button = ({
  children,
  onClick,
  href,
  target,
  type = "button",
  className = "",
  ...restProps
}) => {
  const buttonClass = `box-shadow text-shadow inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-bold text-white bg-[#5a4633] backdrop-blur-2xl cursor-pointer transtition-all duration-500 hover:scale-105  ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...restProps}
      >
        {children}
      </a>
    );
  } else if (onClick) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={buttonClass}
        {...restProps}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button type={type} className={buttonClass} {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
