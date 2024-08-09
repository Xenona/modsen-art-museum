import { ErrorBoundary } from "@components/ErrorBoundary";
import { ShortGallerySkeleton } from "@components/skeletons/ShortGallerySkeleton";
import { useDebounce } from "@utils/hooks/useDebounce";
import { Suspense, useEffect, useState } from "react";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = validateAndSetQuery(e.target.value);
    setQuery(newQuery);
  };

  return (
    <>
      <SearchContainer>
        <Input
          id="searchbar"
          type="text"
          placeholder="Search Art, Artist, Work..."
          onChange={handleInputChange}
          maxLength={100}
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
