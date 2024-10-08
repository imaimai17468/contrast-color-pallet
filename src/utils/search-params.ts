import { createSearchParamsCache, createSerializer, parseAsArrayOf, parseAsInteger, parseAsString } from "nuqs/server";

export const searchParams = {
  baseColors: parseAsArrayOf(parseAsString).withDefault(["#561ecb"]),
  numberOfColors: parseAsInteger.withDefault(5),
  selectedColorIndex: parseAsInteger.withDefault(0),
  lightThemeColor: parseAsString.withDefault("#ffffff"),
  darkThemeColor: parseAsString.withDefault("#000000"),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);
