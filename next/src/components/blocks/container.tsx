import clsx from "clsx";
import React from "react";

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  fullWidth?: boolean;
}
export default function Container({ fullWidth = false, ...props }: ContainerProps) {
  return <section {...props} className={clsx(props.className, "py-8 mx-auto", { "px-6 lg:px-16 lg:py-24 max-w-6xl": !fullWidth })} />;
}
