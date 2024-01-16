import { readItem } from "@directus/sdk";
import { Directus } from ".";
import { Navigation } from "@/types";

export async function getNavigations() {
  const nav = await Directus.request(
    readItem("navigation", "main", {
      fields: [
        {
          items: [
            "id",
            "has_children",
            "title",
            "icon",
            "label",
            "type",
            "url",
            {
              page: ["permalink", "title"],
              children: [
                "id",
                "title",
                "has_children",
                "icon",
                "label",
                "type",
                "url",
                {
                  page: ["permalink", "title"],
                },
              ],
            },
          ],
        },
      ],
    })
  );
  return (nav as Navigation) ?? undefined;
}
