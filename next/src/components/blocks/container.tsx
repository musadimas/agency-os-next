import clsx from "clsx";
import React from "react";

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  fullWidth?: boolean;
  initialPadding?: boolean;
}
export default function Container({ initialPadding, fullWidth = false, ...props }: ContainerProps) {
  return <div {...props} className={clsx(props.className, "py-8 mx-auto", { "px-6 lg:px-16 lg:py-24 max-w-6xl": !fullWidth })} />;
}
