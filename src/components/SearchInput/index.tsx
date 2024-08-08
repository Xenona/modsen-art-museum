import { useSearchParams } from "react-router-dom";
import { SearchContainer, SearchInput as Input, SearchIcon } from "./styled";
import { useDebounce } from "@utils/hooks/useDebounce";
import { Suspense, useEffect, useState } from "react";

import { SearchResults } from "./SearchResults";
import { ShortGallerySkeleton } from "@components/skeletons/ShortGallerySkeleton";

const validateQuery = (query: string) => {
  const maxLength = 100;
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0 || trimmedQuery.length > maxLength) {
    return "";
  }
  return trimmedQuery;
};

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const debouncedQuery = validateQuery(useDebounce(query));

  useEffect(() => {
    if (debouncedQuery) {
      searchParams.set("search", debouncedQuery);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  }, [debouncedQuery]);

  return (
    <>
      <SearchContainer>
        <Input
          id="searchbar"
          type="text"
          placeholder="Search Art, Artist, Work..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <SearchIcon />
      </SearchContainer>
      <Suspense fallback={<ShortGallerySkeleton />}>
        <SearchResults debouncedQuery={debouncedQuery} />
      </Suspense>
    </>
  );
}
