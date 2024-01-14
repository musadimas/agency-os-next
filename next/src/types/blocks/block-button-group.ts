import type { BlockButton } from "./block-button";

export interface BlockButtonGroup {
  id: string;
  buttons: (string | BlockButton)[] | null;
  alignment: "start" | "center" | "end" | null;
}
