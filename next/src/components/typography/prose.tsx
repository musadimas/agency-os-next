import clsx from "clsx";
import React from "react";

interface ProseProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  content: string;
}

export default function Prose({ content, size = "md", ...props }: ProseProps) {
  if (!content) return null;
  return (
    <div
      {...props}
      className={clsx("prose dark:prose-invert prose-img:rounded-lg prose-img:border-2 prose-img:border-gray-500 prose-headings:font-display prose-headings:font-semibold", props.className, {
        "prose-sm": size === "sm",
        "md:prose-base lg:prose-lg": size === "md",
        "prose-lg lg:prose-xl": size === "lg",
      })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
