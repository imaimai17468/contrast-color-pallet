import { createSearchParamsCache, createSerializer, parseAsInteger, parseAsString } from "nuqs/server";

export const searchParams = {
  baseColor: parseAsString.withDefault("#561ecb"),
  numberOfColors: parseAsInteger.withDefault(1),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);
