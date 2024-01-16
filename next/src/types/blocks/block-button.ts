import { ButtonProps } from "@nextui-org/react";
import type { Post, Page, PageBlock } from "../content";

export interface BlockButton {
  id: string;
  sort: number | null;
  type: ("pages" | "posts" | "external" | "sections") | null;
  label: string | null;
  color: ButtonProps["color"];
  variant: ButtonProps["variant"];
  page: string | Page | null;
  post: string | Post | null;
  external_url: string | null;
  section: string | PageBlock | null;
  icon: string | null;
}
