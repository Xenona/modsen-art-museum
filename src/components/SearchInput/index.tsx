import { useSearchParams } from "react-router-dom";
import { SearchContainer, SearchInput as Input, SearchIcon } from "./styled";

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

  function handleSearch(query: string) {
    if (query) {
      searchParams.set('search', query);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
    // TODO: finish searching logic
  }

  return (
    <SearchContainer>
      <Input
        id="searchbar"
        type="text"
        placeholder="Search Art, Artist, Work..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('search')?.toString() || ''}
      />
      <SearchIcon />
    </SearchContainer>
  );
}
