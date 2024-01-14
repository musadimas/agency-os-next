import { PageBuilder } from "@/components";
import { getPage } from "@/utils";

export default async function Home() {
  const page = await getPage("/");

  return <PageBuilder page={page} />;
}
