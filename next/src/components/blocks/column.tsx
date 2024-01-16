import React from "react";
import clsx from "clsx";

import { BlockButtonGroup, BlockColumn, BlockColumnRow } from "@/types";
import { Block, Typography } from "@/components";
import { safeRelation, safeRelationId } from "@/utils";
import { useFiles } from "@/hooks";

export default function Column(props: BlockColumn) {
  const { fileUrl } = useFiles();
  return (
    <Block.Container id={props.id}>
      {props.title && <Typography.Title>{props.title}</Typography.Title>}
      {props.headline && <Typography.Headline content={props.headline} />}
      <div className='mt-12 space-y-16'>
        {(props.rows as BlockColumnRow[])?.map((row, i) => (
          <div key={row.id} className='relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24'>
            <div className='my-auto'>
              {row.title && <Typography.Title>{row.title}</Typography.Title>}
              {row.headline && <Typography.Headline content={row.headline} />}
              {row.content && <Typography.Prose content={row.content} className='mt-4' />}
              {row.button_group && <Block.ButtonGroup {...(row.button_group as BlockButtonGroup)} className='mt-4' />}
            </div>
            <div
              className={clsx("order-first block w-full overflow-hidden border aspect-square dark:border-gray-700 rounded-card", {
                "lg:order-last": row?.image_position === "right",
                "lg:order-first": row?.image_position === "left",
              })}
            >
              <div
                // v-motion
                // :initial="{ opacity: 0, scale: 0.8, y: 50 }"
                // :visibleOnce="{ opacity: 1, scale: 1, y: 0 }"
                // :duration="1000"
                // :delay="250"
                className='h-full w-full'
              >
                <img src={fileUrl(safeRelationId(row.image) ?? "")} alt={safeRelation(row.image)?.description ?? ""} className='object-cover object-center w-full h-full bg-gray-100 rounded-card dark:brightness-90' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Block.Container>
  );
}
