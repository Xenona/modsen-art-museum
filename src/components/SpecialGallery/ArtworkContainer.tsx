import { IMAGE_LOWQ_ENDPOINT } from "@constants/api";
import { ArtworkCard, ImageFigure, Text } from "./ArtworkCard.styled";
import { InfoCard } from "@components/InfoCard";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ApiController } from "@utils/ApiController";
import { ArtworkContainer as Container } from "./styled";
import { StubImage } from "@components/StubImage";
import { Art } from "@utils/schema";
import { ApiError } from "@utils/ApiError";
import { ServerError } from "@pages/500";
import { SkeletonOrImage } from "@components/ImageOrSkeleton";

const getValidDate = (art: Art): number | null => {
  const startDate = art.date_start ? new Date(art.date_start).getTime() : null;
  const endDate = art.date_end ? new Date(art.date_end).getTime() : null;
  if (startDate !== null && endDate !== null) {
    return Math.min(startDate, endDate);
  }
  return startDate ?? endDate ?? null;
};

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
  const { data: artworks, error } = useSuspenseQuery({
    queryKey: ["page", page],
    queryFn: () => ApiController.getPage({ page }),
  });

  if (artworks instanceof ApiError) return <ServerError />;
  if (error) throw error;

  artworks.sort(sortingInfo[sortingId].cb);

  return (
    <Container>
      {artworks.map((art) => (
        <ArtworkCard key={art.id}>
          <ImageFigure>
            <StubImage condition={!!art.image_id}>
              <SkeletonOrImage
                src={IMAGE_LOWQ_ENDPOINT(art.image_id as string)}
                alt={art.thumbnail?.alt_text ?? ""}
              />
            </StubImage>
          </ImageFigure>
          <Text>
            <InfoCard data={art} withImage={false} />
          </Text>
        </ArtworkCard>
      ))}
    </Container>
  );
}
