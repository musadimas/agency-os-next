import { Schema } from "@/types";
import { createDirectus, rest } from "@directus/sdk";

export const useDirectus = createDirectus<Schema>("http://localhost:8055").with(rest());
