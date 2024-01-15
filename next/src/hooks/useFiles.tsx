import { File } from "@/types";

export function useFiles() {
  function fileUrl(fileId: string) {
    if (!fileId) return undefined;

    if (typeof fileId === "string") {
      return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${fileId}`;
    }

    // Handle case where fileId is an object<File>
    if (fileId as File) {
      return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${(fileId as File).id}`;
    }

    return undefined;
  }

  return {
    fileUrl,
  };
}
