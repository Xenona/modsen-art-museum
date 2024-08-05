import { BookmarkButton } from "@components/BookmarkButton";
import { Author, Card, Content, PublicDomain, Title } from "./styled";
import { Link } from "react-router-dom";
import { IMAGE_LOWQ_ENDPOINT } from "@constants/api";
import { StubImage } from "@components/StubImage";
import { Art } from "@utils/api/ApiSchema";
import { SkeletonOrImage } from "@components/ImageOrSkeleton";

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
              src={IMAGE_LOWQ_ENDPOINT(data.image_id as string)}
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
