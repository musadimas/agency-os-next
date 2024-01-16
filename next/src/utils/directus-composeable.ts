import { Schema } from "@/types";
import { createDirectus, rest } from "@directus/sdk";

export const Directus = createDirectus<Schema>(process.env.NEXT_PUBLIC_DIRECTUS_URL as string).with(rest());
