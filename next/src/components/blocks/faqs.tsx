"use client";

import React, { useState } from "react";
import { Block, Typography } from "@/components";
import clsx from "clsx";
import { BlockFaq } from "@/types";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

export default function Faqs(props: BlockFaq) {
  // const [faqs, setFaqs] = useState<{label?:string,content?:string}[]>([]);

  // useCall

  // const faqs = computed(() => {
  //     // We don't want to overwhelm the user with too many FAQs at once so let's only show 5 until they want more
  //     return props.data?.faqs?.slice(offset.value, limit.value).map((item: BlockFaqQuestion) => {
  //         return {
  //             label: item?.title,
  //             content: item?.answer,
  //         };
  //     });
  // });
  return (
    <Block.Container>
      <div
        className={clsx({
          "mx-auto max-w-3xl": props.alignment === "center",
        })}
      >
        {props.title && <Typography.Title>{props.title}</Typography.Title>}
        {props.headline && <Typography.Headline content={props.headline} size='lg' />}
        <div className='pt-6 mt-6'>
          {props.faqs && (
            <Accordion>
              {props.faqs.map((faq, i) => (
                <AccordionItem key={i} title={faq.title}>
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          )}
          <div className='mt-2 text-center'>
            {props.faqs && props.faqs.length > 0 && (
              //    faqs.length < props.props.faqs.length
              <Button variant='ghost' size='lg'>
                Load More
              </Button>
            )}
          </div>
        </div>
      </div>
    </Block.Container>
  );
}
