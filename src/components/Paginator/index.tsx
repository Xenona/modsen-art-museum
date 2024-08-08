import {
  SelectorButton,
  SelectorContainer,
} from "@components/SpecialGallery/styled";
import { useEffect, useState } from "react";
import arrowIcon from "@assets/icons/arrow.svg";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useDebounce } from "@utils/hooks/useDebounce";
import { ApiController } from "@utils/api/ApiController";
import { ApiError } from "@utils/api/ApiError";
import { ServerError } from "@pages/500";

export function Paginator({
  currPage,
  setCurrPage,
}: {
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const debouncedCurrPage = useDebounce(currPage);
  const [maxPage, setMaxPage] = useState<number>(1);
  const { data: newMaxPage, error } = useSuspenseQuery({
    queryKey: ["maxPage", debouncedCurrPage],
    queryFn: () => ApiController.getTotalPages(),
  });

  if (newMaxPage instanceof ApiError) return <ServerError />;
  if (error) throw error;

  useEffect(() => {
    setMaxPage(newMaxPage);
  }, [newMaxPage]);

  const getVisiblePageNumbers = () => {
    const maxVisibleButtons = 4;

    let start = Math.max(currPage - Math.floor(maxVisibleButtons / 2), 1);
    const end = Math.min(start + maxVisibleButtons - 1, maxPage);

    if (end - start + 1 < maxVisibleButtons) {
      start = Math.max(end - maxVisibleButtons + 1, 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <SelectorContainer>
      <SelectorButton
        onClick={() => setCurrPage((prev) => Math.max(prev - 1, 1))}
      >
        <img src={arrowIcon} aria-label="Previous" />
      </SelectorButton>
      {getVisiblePageNumbers().map((page) => (
        <SelectorButton
          key={page}
          onClick={() => setCurrPage(page)}
          className={currPage === page ? "active" : ""}
        >
          {page}
        </SelectorButton>
      ))}
      <SelectorButton
        onClick={() => setCurrPage((prev) => Math.min(prev + 1, maxPage))}
      >
        <img src={arrowIcon} aria-label="Next" />
      </SelectorButton>
    </SelectorContainer>
  );
}
