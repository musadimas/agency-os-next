import { PageBuilder } from "@/components";
import { getNavigations, getPage } from "@/utils";

export default async function Home() {
  const page = await getPage("/");
  const nav = await getNavigations();

  return <PageBuilder page={page} nav={nav} />;
}
