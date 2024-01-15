import clsx from "clsx";

import { BlockRichtext } from "@/types";
import { Block, Typography } from "@/components";

export default function Richtext(props: BlockRichtext) {
  return (
    <Block.Container>
      <div
        className={clsx({
          "text-left": props.alignment === "left",
          "text-center": props.alignment === "center" || !props.alignment,
        })}
      >
        {props.title && <Typography.Title>{props.title}</Typography.Title>}
        {props.headline && <Typography.Headline size='lg' content={props.headline} />}
      </div>
      {props.content && (
        <Typography.Prose
          content={props.content}
          className={clsx(
            {
              "mx-auto": props.alignment === "center",
            },
            "mt-8"
          )}
        />
      )}
    </Block.Container>
  );
}
