import { useSearchParams } from "react-router-dom";
import { SearchContainer, SearchInput as Input, SearchIcon } from "./styled";
import { ApiController } from "@utils/ApiController";
import { useDebounce } from "@utils/useDebounce";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ShortGallery } from "@components/ShortGallery";
import { ApiError } from "@utils/ApiError";
import { ShortGallerySkeleton } from "@components/skeletons/ShortGallerySkeleton";
import { ServerError } from "@pages/500";
import { BottomText } from "@components/SectionHeader/styles";

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

  const { data, error, isPending } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => ApiController.getSearch({ q: debouncedQuery }),
    enabled: debouncedQuery.length > 0,
  });

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
      {debouncedQuery.length > 0 ? (
        isPending ? (
          <ShortGallerySkeleton />
        ) : data instanceof ApiError || error ? (
          <ServerError />
        ) : data && data.length ? (
          <ShortGallery artworks={data} />
        ) : (
          <BottomText>nothing was found!</BottomText>
        )
      ) : null}
    </>
  );
}
