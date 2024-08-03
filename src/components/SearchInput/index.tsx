import { useSearchParams } from "react-router-dom";
import { SearchContainer, SearchInput as Input, SearchIcon } from "./styled";
import { ApiController } from "@utils/ApiController";
import { useDebounce } from "@utils/Debouncer";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ShortGallery } from "@components/ShortGallery";
import { ApiError } from "@utils/ApiError";
import { ShortGallerySkeleton } from "@components/skeletons/ShortGallerySkeleton";
import { ServerError } from "@pages/500";
import { BottomText } from "@components/SectionHeader/styles";

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    if (debouncedQuery) {
      searchParams.set("search", debouncedQuery);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
    console.log(
      ApiController.getSearch({ q: searchParams.get("search") as string }),
    );
  }, [debouncedQuery]);

  const { data, error, isPending } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => ApiController.getSearch({ q: debouncedQuery }),
  });

  if (error) console.error("LOL", error);

  return (
    <>
      <SearchContainer>
        <Input
          id="searchbar"
          type="text"
          placeholder="Search Art, Artist, Work..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          defaultValue={searchParams.get("search")?.toString() || ""}
        />
        <SearchIcon />
      </SearchContainer>
      {isPending ? (
        <ShortGallerySkeleton />
      ) : data instanceof ApiError ? (
        <ServerError />
      ) : data && data.length ? (
        <ShortGallery artworks={data} />
      ) : (
        <BottomText>nothing was found!</BottomText>
      )}
    </>
  );
}
