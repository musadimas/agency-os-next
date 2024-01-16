"use client";

import React, { useRef, useState } from "react";
import { readItems } from "@directus/sdk";
import clsx from "clsx";
import useSWR from "swr";

import { Block, CustomCard, Typography } from "@/components";
import { BlockTeam, Schema } from "@/types";
import { Directus } from "@/utils";

export default function Team(props: BlockTeam) {
  const teamToDisplay = (team: any[]) => {
    if (!team) return;
    // Split the array into two arrays
    const teamMembersSplit = splitArray(team, 2);

    // Return the two arrays as an object
    return {
      // Duplicate each array so we can animate the last item to the first position
      left: [...teamMembersSplit[0], ...teamMembersSplit[0]],
      right: [...teamMembersSplit[1], ...teamMembersSplit[1]],
    };
  };
  const { data: team } = useSWR(["team"], async (args) => {
    const data = await Directus.request(readItems(args[0] as any));
    return teamToDisplay(data);
  });

  // const { data: team }: { data: Ref<Team[]> } = await useAsyncData(
  //     'team',
  //     () => {
  //         return useDirectus(readItems('team', {}));
  //     },
  //     {
  //         transform: (data) => data,
  //     },
  // );

  function splitArray(array: any[], numParts: number = 2) {
    let result = [] as any[];

    for (let i = 0; i < array.length; i++) {
      let index = i % numParts;

      if (!result[index]) {
        result[index] = [];
      }

      result[index].push(array[i]);
    }

    return result;
  }

  function animationDelay() {
    let possibleAnimationDelays = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];
    return possibleAnimationDelays[Math.floor(Math.random() * possibleAnimationDelays.length)];
  }

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const target = useRef<HTMLDivElement | null>(null);
  const leftCol = useRef<HTMLDivElement | null>(null);
  const rightCol = useRef<HTMLDivElement | null>(null);
  const [colHeight, setColHeight] = useState<number>(0);
  const [leftColHeight, setLeftColHeight] = useState<number>(0);
  const [rightColHeight, setRightColHeight] = useState<number>(0);

  //   const target = ref(null);
  //   const isVisible = ref(false);
  //   const leftCol: Ref<HTMLElement | null> = ref(null);
  //   const rightCol: Ref<HTMLElement | null> = ref(null);
  //   const colHeight = ref(0);
  //   const leftColHeight = ref(0);
  //   const rightColHeight = ref(0);

  //   const { stop } = useIntersectionObserver(
  //     // target,
  //     ([{ isIntersecting }], observerElement) => {
  //       isVisible.value = isIntersecting;
  //     },
  //     {
  //       threshold: 0.25,
  //     }
  //   );

  //   useResizeObserver(leftCol, (entries) => {
  //     if (!entries[0]) return;
  //     colHeight.value = (entries[0].target as HTMLElement).offsetHeight;
  //   });

  //   const duration = computed(() => {
  //     return `${colHeight.value * 15}ms`;
  //   });
  return (
    <section>
      <Block.Container>
        <div className='flex flex-col mx-auto lg:flex-row'>
          <div className='flex flex-col pr-4 lg:w-3/5'>
            {props.title && <Typography.Title>{props.title}</Typography.Title>}
            {props.headline && <Typography.Headline content={props.headline} />}
            {props.content && <Typography.Prose className='mt-4' content={props.content} />}
          </div>

          {/* <!-- Team --> */}
          {team && (
            <div ref={target} className='w-full relative grid h-[49rem] max-h-[60vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 border-t-4 border-t-primary border-b-4 border-b-gray-500 mt-8 lg:mt-0'>
              {/* <!-- Left Col --> */}
              <div
                ref={leftCol}
                className={clsx({ "animate-marquee": isVisible }, "space-y-10 py-4 -mt-10 md:max-w-[320px] ")}
                //   style={
                //      { '--marquee-duration': duration} as any
                //   }
              >
                {team.left?.map((person) => (
                  <CustomCard.Team v-for='person in teamToDisplay.left' key={person.id} {...person} />
                ))}
              </div>
              {/* <!-- Right Col --> */}
              <div
                ref={rightCol}
                className={clsx({ "animate-marquee": isVisible }, "space-y-10 py-4 -mt-10 md:max-w-[320px] ")}
                // :style="{
                //     '--marquee-duration': duration,
                // }"
              >
                {/* <TeamCard
                        v-for="person in teamToDisplay.right"
                        :key="person.id"
                        :style="{
                            animationDelay: animationDelay(),
                        }"
                        :person="person"
                    /> */}
              </div>
            </div>
          )}
        </div>
      </Block.Container>
    </section>
  );
}
