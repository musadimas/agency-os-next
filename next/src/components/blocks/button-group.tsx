import { Button, ButtonProps } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { BlockButton, BlockButtonGroup, Page, PageBlock, Post } from "@/types";

export default function ButtonGroup(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & BlockButtonGroup & { size?: ButtonProps["size"] }) {
  if (props.buttons && props.buttons.length < 1) return null;
  function getUrl(button: BlockButton): string | undefined {
    switch (button.type) {
      case "pages":
        return (button.page as Page)?.permalink ?? undefined;
      case "posts":
        return (button.post as Post)?.slug ?? undefined;
      case "external":
        return button.external_url ?? undefined;
      case "sections":
        return "#" + ((button.section as PageBlock)?.item as unknown as string) ?? undefined;
      default:
        return undefined;
    }
  }
  return (
    <div
      className={clsx(props.className, "flex flex-col  space-y-4 md:space-x-4 md:flex-row md:space-y-0", {
        "justify-start": props.alignment == "start",
        "justify-center": props.alignment == "center",
        "justify-end": props.alignment == "end",
      })}
    >
      {(props.buttons as BlockButton[])?.map((button) => {
        const url = getUrl(button);

        if (!url) return;
        return (
          <Button as={Link} key={button.id} size={props.size} color={button.color == ("white" as any) ? "default" : button.color} variant={button.variant as any} href={url}>
            {button.label}
          </Button>
        );
      })}
    </div>
  );
}
