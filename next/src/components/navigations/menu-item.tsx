import { NavigationItem } from "@/types";
import { getNavItemUrl } from "@/utils";
import Link from "next/link";
import React from "react";

export default function MenuItem(props: NavigationItem) {
  const url = getNavItemUrl(props);
  return (
    <>
      {!props.has_children && url && (
        <Link href={url} className='menu-link' exact-active-class='bg-gray-700' target={props.open_in_new_tab ? "_blank" : "_self"}>
          {props.title}
        </Link>
      )}

      {/* <Popover v-else v-slot="{ close }" class="relative" as="div">
		<PopoverButton
			:ref="
				() => {
					popover = close;
				}
			"
			class="menu-link"
		>
			{{ item.title }}
			<Icon name="heroicons:chevron-down" class="flex-none w-5 ml-1 text-gray-400" aria-hidden="true" />
		</PopoverButton>

		<transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="translate-y-1 opacity-0"
			enter-to-class="translate-y-0 opacity-100"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="translate-y-0 opacity-100"
			leave-to-class="translate-y-1 opacity-0"
		>
			<PopoverPanel
				class="absolute z-10 w-screen max-w-md mt-4 overflow-hidden bg-gray-800 shadow-lg rounded-panel top-full"
			>
				<div class="p-4">
					<NuxtLink
						v-for="childItem in item.children as NavigationItem[]"
						:key="childItem.id"
						:href="getNavItemUrl(childItem) as RouteLocationRaw"
						class="relative flex p-4 leading-6 transition duration-150 rounded-panel group gap-x-6 hover:bg-gray-900"
					>
						<div
							class="flex items-center justify-center flex-none p-2 mt-1 border rounded-button h-11 w-11 border-primary"
						>
							<Icon
								v-if="childItem.icon"
								:name="convertIconName(childItem.icon) as string"
								class="w-10 h-10 text-primary"
							/>
						</div>
						<div class="">
							<p class="block font-medium text-white font-display">
								{{ childItem.title }}
							</p>
							<p v-if="childItem.label" class="mt-1 text-sm leading-tight text-gray-400">
								{{ childItem.label }}
							</p>
						</div>
					</NuxtLink>
				</div>
			</PopoverPanel>
		</transition>
	</Popover> */}
    </>
  );
}
