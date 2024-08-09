import { BookmarkButton } from "@components/BookmarkButton";
import { SkeletonOrImage } from "@components/ImageOrSkeleton";
import { StubImage } from "@components/StubImage";
import { IMAGE_ENDPOINT } from "@constants/api";
import { Link } from "react-router-dom";
import { Art } from "src/types/schema";

import { Author, Card, Content, PublicDomain, Title } from "./styled";

export function InfoCard({
  data,
  withImage,
}: {
  data: Art;
  withImage: boolean;
}) {
  return (
    <Link to={`/artwork/${data.id}`} state={data}>
      <Card $withImage={withImage}>
        {withImage ? (
          <StubImage condition={!!data.image_id}>
            <SkeletonOrImage
              isThumbnail={true}
              src={IMAGE_ENDPOINT(data.image_id as string)}
              alt={data.thumbnail?.alt_text ?? ""}
            />
          </StubImage>
        ) : null}
        <Content>
          <Title>{data.title}</Title>
          <Author>{data.artist_title}</Author>
          <PublicDomain>
            {data.on_loan_display ? "Public" : "Private"}
          </PublicDomain>
        </Content>
        <BookmarkButton id={data.id} />
      </Card>
    </Link>
  );
}
