import { PalletContent } from "@/components/page/pallet-content";
import { searchParamsCache } from "@/utils/search-params";
import type { SearchParams } from "nuqs/parsers";

type Props = {
  searchParams: SearchParams;
};

export default function Home({ searchParams }: Props) {
  searchParamsCache.parse(searchParams);

  return <PalletContent />;
}
