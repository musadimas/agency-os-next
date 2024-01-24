import Link from "next/link";
import React from "react";
import { Typography } from "@/components";
import { Navigation, NavigationItem } from "@/types";
import { getNavItemUrl } from "@/utils";
import { useFiles } from "@/hooks";

export default function Footer(props: { data?: Navigation }) {
  const { fileUrl } = useFiles();
  return (
    <footer className='relative bg-brand-green-200 !text-white md:px-[140px] md:py-[172px]' aria-labelledby='footer-heading'>
      <div className='mx-auto'>
        {/* <!-- Header --> */}
        <div className='flex justify-between items-start'>
          <div className='w-full'>
            {/* {props.data?.logo && (
              <Link href='/'>
                <img src={fileUrl(props.data.logo as string)} />
              </Link>
            )} */}
            {/* <VText v-if="globals.tagline" text-color="light" className="mt-2">
						{{ globals.tagline }}
					</VText> */}
          </div>
          <div className='flex items-center justify-end'>{/* <DarkModeToggle className="hidden text-gray-600 md:block hover:text-gray-400" /> */}</div>
        </div>

        {/* <!-- Navigation + Form --> */}

        <nav className='grid gap-8 mt-8 md:grid-cols-2 xl:mt-0 xl:col-span-2'>
          <div className='mt-4'>
            <Typography.Title>Menu</Typography.Title>
            <ul role='list' className='grid gap-2 mt-2 md:grid-cols-2'>
              {(props.data?.items as NavigationItem[])?.map((item) => {
                const url = getNavItemUrl(item);
                if (!url) return;
                return (
                  <li key={item.id}>
                    <Link href={url} className='font-medium text-white 	'>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* 

				<div v-if="form" className="relative">
					<TypographyHeadline :content="`<p>Subscribe to our <em>newsletter</em></p>`" size="sm">
						Subscribe to our newsletter
					</TypographyHeadline>
					<UForm className="mt-4 mb-8" :form="form" />
				</div> */}
        </nav>
      </div>

      {/* <!-- Bottom -->
		 <div className="pt-6 mx-auto border-t dark:border-t-gray-700 max-w-7xl md:flex md:items-center md:justify-between">
		 	<div className="flex items-center justify-center space-x-6 md:order-last md:mb-0">
		 		<NuxtLink
		 			v-for="link in globals.social_links"
		 			:key="link.url"
		 			:href="link.url"
		 			className="w-6 h-6 text-white"
		 			target="_blank"
		 		>
		 			<span className="sr-only">{{ link.service }}</span>
		 			<Icon className="w-8 h-8 text-gray-700 dark:text-white hover:opacity-75" :name="`mdi:${link.service}`" />
		 		</NuxtLink>
		 	</div>
		 	<div className="mt-8 md:mt-0 md:order-1">
		 		<span className="mt-2 text-gray-600 dark:text-gray-400">
		 			Copyright © 1988 - {{ new Date().getFullYear() }}
		 			<NuxtLink href="/" className="mx-2 hover:text-primary" rel="noopener noreferrer">{{ globals.title }}.</NuxtLink>
		 			All rights reserved.
		 		</span>
		 		<!-- You're free to remove this footer if you want. But we'd appreciate it if you keep the credits. -->
		 		<span className="block mt-2 text-gray-600 dark:text-gray-400">
		 			<Icon name="heroicons:bolt" className="w-4 h-4 text-primary" />
		 			Site powered by
		 			<NuxtLink
		 				href="https:www.directus.io?ref=agencyos_footer"
		 				target="_blank"
		 				rel="noopener noreferrer"
		 				className="border-b dark:border-b-gray-700 hover:text-primary"
		 			>
		 				Directus
		 			</NuxtLink>
		 			and
		 			<NuxtLink
		 				href="https:www.nuxt.com?ref=agencyos_footer"
		 				target="_blank"
		 				rel="noopener noreferrer"
		 				className="border-b dark:border-b-gray-700 hover:text-primary"
		 			>
		 				Nuxt
		 			</NuxtLink>
		 			.
		 		</span>
		 	</div>
		 </div> */}
    </footer>
  );
}
