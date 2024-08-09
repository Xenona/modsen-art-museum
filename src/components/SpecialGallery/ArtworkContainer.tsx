import { SkeletonOrImage } from "@components/ImageOrSkeleton";
import { InfoCard } from "@components/InfoCard";
import { StubImage } from "@components/StubImage";
import { IMAGE_ENDPOINT } from "@constants/api";
import { ServerError } from "@pages/500";
import { ApiController } from "@utils/api/ApiController";
import { ApiError } from "@utils/api/ApiError";
import { Art } from "@utils/api/ApiSchema";
import { getValidDate } from "@utils/getValidDate";
import { useSuspenseQuery } from "@utils/hooks/useFetch";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import { ArtworkCard, ImageFigure, Text } from "./ArtworkCard.styled";
import { ArtworkContainer as Container } from "./styled";

export const sortingInfo = [
  {
    type: "Title (A-Z)",
    cb: (a: Art, b: Art) => {
      const titleA = a.title ?? "";
      const titleB = b.title ?? "";
      return titleA.localeCompare(titleB);
    },
  },
  {
    type: "Title (Z-A)",
    cb: (a: Art, b: Art) => {
      const titleA = a.title ?? "";
      const titleB = b.title ?? "";
      return titleB.localeCompare(titleA);
    },
  },
  {
    type: "Date (min-max)",
    cb: (a: Art, b: Art) => {
      const dateA = getValidDate(a);
      const dateB = getValidDate(b);
      if (dateA === null && dateB === null) return 0;
      if (dateA === null) return 1;
      if (dateB === null) return -1;
      return dateA - dateB;
    },
  },
  {
    type: "Date (max-min)",
    cb: (a: Art, b: Art) => {
      const dateA = getValidDate(a);
      const dateB = getValidDate(b);
      if (dateA === null && dateB === null) return 0;
      if (dateA === null) return 1;
      if (dateB === null) return -1;
      return dateB - dateA;
    },
  },
];

export function ArtworkContainer({
  page,
  sortingId,
}: {
  page: number;
  sortingId: number;
}) {
  const artworks = useSuspenseQuery({
    queryKey: ["page", page],
    queryFn: () => ApiController.getPage({ page }),
  });

  if (artworks instanceof ApiError) return <ServerError />;

  const sortFn = useMemo(() => sortingInfo[sortingId].cb, [sortingId]);
  artworks.sort(sortFn);

  const sortedArtworks = useMemo(() => {
    const sorted = [...artworks];
    sorted.sort(sortFn);
    return sorted;
  }, [artworks, sortFn]);

  const artworkElements = useMemo(
    () =>
      sortedArtworks.map((art) => (
        <ArtworkCard key={art.id}>
          <Link to={`/artwork/${art.id}`} state={art}>
            <ImageFigure>
              <StubImage condition={!!art.image_id}>
                <SkeletonOrImage
                  src={IMAGE_ENDPOINT(art.image_id as string)}
                  alt={art.thumbnail?.alt_text ?? ""}
                />
              </StubImage>
            </ImageFigure>
          </Link>
          <Text>
            <InfoCard data={art} withImage={false} />
          </Text>
        </ArtworkCard>
      )),
    [sortedArtworks],
  );

  return <Container>{artworkElements}</Container>;
}
