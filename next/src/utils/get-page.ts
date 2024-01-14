import { readItems } from "@directus/sdk";
import { notFound } from "next/navigation";

import { Directus } from ".";
import { Page } from "@/types";

export async function getPage(path: string) {
  try {
    const pageFilter = () => {
      let finalPath;

      if (path === "/") {
        // Match the homepage
        finalPath = "/";
      } else if (path.endsWith("/")) {
        // Remove any other trailing slash
        finalPath = path.slice(0, -1);
      } else {
        // Match any other page
        finalPath = path;
      }

      return { permalink: { _eq: finalPath } };
    };

    const page = await Directus.request(
      readItems("pages", {
        filter: pageFilter(),
        fields: [
          "*",
          {
            seo: ["*"],
            blocks: [
              "id",
              "collection",
              "hide_block",
              {
                item: {
                  block_hero: ["id", "title", "headline", "content", "image", "image_position", { button_group: ["*", { buttons: ["*", { page: ["permalink"], post: ["slug"] }] }] }],
                  block_faqs: ["id", "title", "faqs", "headline", "alignment"],
                  block_richtext: ["id", "title", "headline", "content", "alignment"],
                  block_testimonials: [
                    "id",
                    "title",
                    "headline",
                    {
                      testimonials: [
                        {
                          testimonials_id: ["id", "title", "subtitle", "content", "company", "company_logo", { image: ["id", "title", "description"] }],
                        },
                      ],
                    },
                  ],
                  block_quote: ["id", "title", "subtitle", "content"],
                  block_cta: [
                    "id",
                    "title",
                    "headline",
                    "content",
                    "buttons",
                    {
                      button_group: [
                        "*",
                        {
                          buttons: ["*", { page: ["permalink"], post: ["slug"] }],
                        },
                      ],
                    },
                  ],
                  block_form: ["id", "title", "headline", { form: ["*"] }],
                  block_logocloud: [
                    "id",
                    "title",
                    "headline",
                    {
                      logos: [
                        "id",
                        {
                          directus_files_id: ["id", "title", "description"],
                        },
                      ],
                    },
                  ],
                  block_gallery: [
                    "id",
                    "title",
                    "headline",
                    {
                      gallery_items: [
                        {
                          directus_files_id: ["id", "title", "description"],
                        },
                      ],
                    },
                  ],
                  block_steps: [
                    "id",
                    "title",
                    "headline",
                    "show_step_numbers",
                    "alternate_image_position",
                    {
                      steps: [
                        "id",
                        "title",
                        "content",
                        "image",
                        {
                          button_group: [
                            "*",
                            {
                              buttons: ["*", { page: ["permalink"], post: ["slug"] }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  block_columns: [
                    "id",
                    "title",
                    "headline",
                    {
                      rows: [
                        "title",
                        "headline",
                        "content",
                        "image_position",
                        { image: ["id", "title", "description"] },
                        {
                          button_group: [
                            "*",
                            {
                              buttons: ["*", { page: ["permalink"], post: ["slug"] }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  block_divider: ["id", "title"],
                  block_team: ["*"],
                  block_html: ["*"],
                  block_video: ["*"],
                  block_cardgroup: ["*"],
                },
              },
            ],
          },
        ],
        limit: 1,
      })
    );

    if (page.length < 1) throw "Not Found";
    return page[0] as Page;
  } catch (error) {
    notFound();
  }
}
