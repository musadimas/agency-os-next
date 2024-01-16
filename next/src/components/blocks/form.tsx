import React from "react";
import { Block, Typography } from "@/components";
import { BlockForm } from "@/types";

export default function Form(props: BlockForm) {
  return (
    <Block.Container id={props.id}>
      <div className='max-w-3xl p-8 mx-auto mt-4 bg-gray-100 dark:bg-gray-800 rounded-panel'>
        {props.title && <Typography.Title>{props.title}</Typography.Title>}
        {props.headline && <Typography.Headline content={props.headline} size='lg' />}
        {/* <UForm v-if="data?.form" :form="data?.form as Form" class="mt-4" /> */}
      </div>
    </Block.Container>
  );
}
