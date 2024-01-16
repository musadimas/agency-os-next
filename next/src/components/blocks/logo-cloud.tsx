"use client";

import { motion } from "framer-motion";

import { BlockLogocloud, BlockLogocloudFile, File } from "@/types";
import { Block, Typography } from "@/components";
import { useFiles } from "@/hooks";

export default function LogoCloud(props: BlockLogocloud) {
  const { fileUrl } = useFiles();
  return (
    <Block.Container>
      {props.title && <Typography.Title>{props?.title}</Typography.Title>}
      {props.headline && <Typography.Headline content={props.headline} size='lg' />}
      <div className='flow-root mt-8 lg:mt-10'>
        {props.logos && props.logos.length > 0 && (
          <div className='grid gap-4 md:grid-cols-4 md:gap-8'>
            {(props.logos as BlockLogocloudFile[]).map((logo, i) => (
              <motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} key={i}>
                <motion.div
                  key={logo.id}
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    delay: 0.2 + 0.1 * i,
                  }}
                  className='flex items-center justify-center p-8 border rounded-card dark:border-gray-700 dark:bg-gray-200'
                >
                  <img className='h-12' src={fileUrl((logo.directus_files_id as File).id)} alt={(logo.directus_files_id as File)?.description ?? ""} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Block.Container>
  );
}
