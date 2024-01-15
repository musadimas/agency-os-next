"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Block } from "@/components";
import { BlockQuote } from "@/types";

export default function Quote(props: BlockQuote) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  console.log(ref?.current);

  return (
    <Block.Container>
      {props.content && (
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className='relative'
        >
          {props.content && (
            <div className='relative text-4xl italic leading-tight text-gray-900 font-display md:leading-tight dark:text-gray-100 md:text-6xl text-wrap-[balance] dark:drop-shadow' dangerouslySetInnerHTML={{ __html: props.content }} />
          )}
          {/* <UIcon
          name="material-symbols:format-quote-rounded"
          className="absolute w-20 h-20 rotate-180 -left-8 text-primary/20 -top-8"
      /> */}
        </div>
      )}

      <div className='w-full mt-4 text-sm font-semibold tracking-wider uppercase word-spacing-tight lg:text-lg font-display'>
        {props.title && <p className='text-primary'>{props.title}</p>}
        {props.subtitle && <p className='dark:text-white'>{props.subtitle}</p>}
      </div>
    </Block.Container>
  );
}
