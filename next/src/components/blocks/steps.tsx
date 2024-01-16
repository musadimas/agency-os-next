"use client";

import { Variants, motion } from "framer-motion";
import clsx from "clsx";

import { BlockButtonGroup, BlockStep, BlockStepItem } from "@/types";
import { isEven, safeRelation, safeRelationId } from "@/utils";
import { Block, Typography } from "@/components";
import { useFiles } from "@/hooks";

export default function Steps(props: BlockStep) {
  const { fileUrl } = useFiles();

  return (
    <Block.Container id={props.id}>
      {props.title && <Typography.Title>{props.title}</Typography.Title>}
      {props.headline && <Typography.Headline content={props.headline} size='lg' />}
      <div className='mt-8'>
        {(props.steps as BlockStepItem[])?.map((step, i) => (
          <motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} key={step.id}>
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                  scale: 1,
                  x: isEven(i) ? -200 : 200,
                },
                onscreen: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                },
              }}
              transition={{ duration: 0.3 }}
              className={clsx("relative p-6 md:flex md:space-x-8 ring-primary/50 ring-1 rounded-card", {
                "mr-8 md:mr-24": isEven(i),
                "ml-8 md:ml-24": !isEven(i),
                "md:flex-row": isEven(i) && !props.alternate_image_position,
                "md:flex-row-reverse md:space-x-reverse": !isEven(i) && props.alternate_image_position,
              })}
            >
              {step.image && (
                <div className='flex-shrink-0 dark:bg-white dark:brightness-90 rounded-panel'>
                  <img className='object-cover w-full h-32 rounded-card md:w-48 md:h-full' src={fileUrl(safeRelationId(step.image) as string)} alt={safeRelation(step.image)?.description ?? ""} />
                </div>
              )}
              <div className='w-full mt-4 text-left md:mt-0'>
                {props.show_step_numbers && <Typography.Title>Step {i + 1}</Typography.Title>}
                {step.title && <Typography.Headline content={step.title} size='sm' />}
                {step.content && <Typography.Prose content={step.content} className='mt-4' />}
                {step.button_group && <Block.ButtonGroup {...(step.button_group as BlockButtonGroup)} className='mt-4' />}
              </div>
            </motion.div>
            {props.steps && props.steps.length - 1 !== i && (
              <motion.svg
                variants={{
                  offscreen: {
                    opacity: 0,
                    scale: 1,
                    y: -100,
                  },
                  onscreen: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{ duration: 0.3 }}
                className='h-16 m-0 mx-auto stroke-current text-primary md:h-20 steps-animation'
                viewBox='0 0 60 200'
              >
                <line className='path' x1='15' x2='15' y1='0' y2='200' strokeWidth='8' strokeLinecap='square' />
              </motion.svg>
            )}
          </motion.div>
        ))}
      </div>
    </Block.Container>
  );
}
