import React from "react";
export interface ButtonProps {
  children?: React.ReactNode;
  primary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: "small" | "medium" | "large";
}

export default function Button({
  children,
  onClick,
  primary,
  size
}: ButtonProps) {
  return (
    <button className="bg-red-500 p-2" onClick={onClick}>
      {children}
    </button>
  );
}
