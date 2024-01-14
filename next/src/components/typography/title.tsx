import clsx from "clsx";
import React from "react";

interface TitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export default function Title(props: TitleProps) {
  if (!props.children) return null;
  return <h2 className={clsx("font-medium tracking-wider uppercase font-display text-primary", props.className)} {...props} />;
}
