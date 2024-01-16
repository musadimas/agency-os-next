import React from "react";

import { BlockType, Page, PageBlock } from "@/types";
import { Block } from "@/components";

const componentMap: Record<BlockType, any> = {
  block_hero: Block["Hero"],
  block_faqs: Block["Faqs"],
  block_richtext: Block["Richtext"],
  block_testimonials: Block["Hero"],
  block_quote: Block["Quote"],
  block_cta: Block["Hero"],
  block_form: Block["Form"],
  block_logocloud: Block["LogoCloud"],
  block_team: Block["Team"],
  block_html: Block["Hero"],
  block_video: Block["Video"],
  block_gallery: Block["Gallery"],
  block_steps: Block["Steps"],
  block_columns: Block["Column"],
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
        if (!block.collection) return;
        const Element = componentMap[block.collection];

        return <Element key={block.id} {...block.item} />;
      })}
    </>
  );
}
