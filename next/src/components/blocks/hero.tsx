import clsx from "clsx";

import { BlockButtonGroup, BlockHero } from "@/types";
import { Typography, Block } from "@/components";

export default function Hero(props: BlockHero) {
  return (
    <Block.Container id={props.id} className='relative grid gap-12 md:grid-cols-3'>
      <div className='md:pt-12 md:col-span-2'>
        {props.title && <Typography.Title>{props.title}</Typography.Title>}
        {props.headline && <Typography.Headline content={props.headline} />}
        {props.content && <Typography.Prose className='py-6 font-display' content={props.content} />}
        {props.button_group && <Block.ButtonGroup {...(props.button_group as BlockButtonGroup)} />}
      </div>
      {props.image && (
        <div
          className={clsx("overflow-hidden border lg:relative lg:h-full dark:border-gray-700 rounded-card", {
            "order-first lg:-ml-48 md:-ml-16": props.image_position == "left",
            "lg:-mr-48 md:-mr-16": props.image_position !== "left",
          })}
        >
          <img className='w-full overflow-hidden dark:brightness-90 max-h-[700px] h-full object-cover rounded-card' src={"http://localhost:8055/assets/" + props.image} alt={props.image as string} />
        </div>
      )}
    </Block.Container>
  );
}
