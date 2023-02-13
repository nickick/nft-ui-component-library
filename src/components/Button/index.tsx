import React from "react";
export interface ButtonProps {
  children?: React.ReactNode;
  primary?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Button ({ children, primary, size }: ButtonProps) {
  return <button className="bg-red-500 p-2">{children}</button>;
};
