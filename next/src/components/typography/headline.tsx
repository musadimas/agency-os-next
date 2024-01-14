import clsx from "clsx";
import React from "react";

interface HeadlineProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "title";
  content: string;
}

export default function Headline({ content, size = "md", ...props }: HeadlineProps) {
  if (!content) return null;
  return (
    <div
      {...props}
      className={clsx("font-display font-semibold leading-snug tracking-tight color-em dark:text-white", props.className, {
        "text-xl": size === "xs",
        "text-2xl": size === "sm",
        "text-3xl": size === "md",
        "text-4xl": size === "lg",
        "text-2xl md:text-5xl": size === "xl",
        "text-4xl xs:text-5xl md:text-7xl  dark:drop-shadow": size === "title",
      })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
