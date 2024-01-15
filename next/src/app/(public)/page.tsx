import { PageBuilder } from "@/components";
import { getPage } from "@/utils";

export default async function Home() {
  const page = await getPage("/");
  console.log({ page: page?.blocks });

  return <PageBuilder page={page} />;
}
