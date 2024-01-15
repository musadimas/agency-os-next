import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { BlockButton, BlockButtonGroup, Page, Post } from "@/types";

export default function ButtonGroup(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & BlockButtonGroup) {
  if (props.buttons && props.buttons.length < 1) return null;
  function getUrl(button: BlockButton): string | undefined {
    switch (button.type) {
      case "pages":
        return (button.page as Page)?.permalink ?? undefined;
      case "posts":
        return (button.post as Post)?.slug ?? undefined;
      case "external":
        return button.external_url ?? undefined;
      default:
        return undefined;
    }
  }
  return (
    <div
      className={clsx("flex flex-col  space-y-4 md:space-x-4 md:flex-row md:space-y-0", {
        "justify-start": props.alignment == "start",
        "justify-center": props.alignment == "center",
        "justify-end": props.alignment == "end",
      })}
    >
      {(props.buttons as BlockButton[])?.map((button) => {
        return (
          <Button as={Link} key={button.id} color={button.color as any} variant={button.variant as any} href={getUrl(button)}>
            {button.label}
          </Button>
        );
      })}
    </div>
  );
}
