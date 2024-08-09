import { ErrorBoundary } from "@components/ErrorBoundary";
import { ShortGallerySkeleton } from "@components/skeletons/ShortGallerySkeleton";
import { MAX_CHARS_SEARCH_INPUT } from "@constants/ui";
import { useDebounce } from "@utils/hooks/useDebounce";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchResults } from "./SearchResults";
import { SearchContainer, SearchIcon, SearchInput as Input } from "./styled";

const validateAndSetQuery = (query: string) => {
  const sanitizedQuery = query.replace(/[<>]/g, "");
  const trimmedQuery = sanitizedQuery.trimStart();
  return trimmedQuery;
};

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(
    validateAndSetQuery(searchParams.get("search") || ""),
  );
  const debouncedQuery = validateAndSetQuery(useDebounce(query));

  useEffect(() => {
    if (debouncedQuery) {
      searchParams.set("search", debouncedQuery);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  }, [debouncedQuery]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = validateSearchQuery(e.target.value);
      setQuery(newQuery);
    },
    [setQuery],
  );

  return (
    <>
      <SearchContainer>
        <Input
          id="searchbar"
          type="text"
          placeholder="Search Art, Artist, Work..."
          onChange={handleInputChange}
          maxLength={MAX_CHARS_SEARCH_INPUT}
          value={query}
        />
        <SearchIcon />
      </SearchContainer>
      <ErrorBoundary>
        <Suspense fallback={<ShortGallerySkeleton />}>
          <SearchResults debouncedQuery={debouncedQuery} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
