import React from "react";

import { BlockType, Page, PageBlock } from "@/types";
import { Block } from "@/components";

const componentMap: Record<BlockType, any> = {
  block_hero: Block["Hero"],
  block_faqs: Block["Hero"],
  block_richtext: Block["Hero"],
  block_testimonials: Block["Hero"],
  block_quote: Block["Hero"],
  block_cta: Block["Hero"],
  block_form: Block["Hero"],
  block_logocloud: Block["Hero"],
  block_team: Block["Hero"],
  block_html: Block["Hero"],
  block_video: Block["Hero"],
  block_gallery: Block["Hero"],
  block_steps: Block["Hero"],
  block_columns: Block["Hero"],
  block_divider: Block["Hero"],
};

type PageBuilderProps = {
  page: Page;
};

export function PageBuilder(props: PageBuilderProps) {
  const blocks = (props.page as Page)?.blocks as PageBlock[];
  const filteredBlocks = blocks?.filter((block) => {
    return block.hide_block !== true;
  });

  return (
    <>
      {filteredBlocks?.map((block) => {
        if (!block.collection || block.collection !== "block_hero") return;
        const Element = componentMap[block.collection];

        return <Element key={block.id} {...block.item} />;
      })}
    </>
  );
}
