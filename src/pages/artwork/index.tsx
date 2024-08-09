import { BookmarkButton } from "@components/BookmarkButton";
import { SkeletonOrImage } from "@components/ImageOrSkeleton";
import { Popup } from "@components/Popup";
import { ImageFigure } from "@components/SpecialGallery/ArtworkCard.styled";
import { StubImage } from "@components/StubImage";
import { IMAGE_ENDPOINT } from "@constants/api";
import { ApiController } from "@utils/api/ApiController";
import { ApiError } from "@utils/api/ApiError";
import { useSuspenseQuery } from "@utils/hooks/useFetch";
import { SafeHtml } from "@utils/HtmlStripper";
import { useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

import {
  Article,
  ArticleTitle,
  Figure,
  Important,
  Key,
  ListItem,
  MainHorizontal,
} from "./styled";

export function ArtworkPage() {
  const { id } = useParams();
  const { state } = useLocation();
  const [showingPopup, setShowingPopup] = useState<boolean>(false);

  const artId = Number(id);
  if (!id || isNaN(artId)) {
    return <Navigate to="/404" replace />;
  }

  let artwork;
  if (!state) {
    artwork = useSuspenseQuery({
      queryKey: ["artwork", artId],
      queryFn: () => ApiController.getArtwork(artId),
    });
  } else {
    artwork = state;
  }

  if (artwork instanceof ApiError) {
    return (
      <Navigate to={`/${artwork.errorCode === 404 ? 404 : 500}`} replace />
    );
  }

  return (
    <MainHorizontal>
      <Figure onClick={() => setShowingPopup(true)}>
        <StubImage condition={!!artwork.image_id}>
          {/* <Link to={IMAGE_ENDPOINT(artwork.image_id as string)}> */}
          <ImageFigure>
            <SkeletonOrImage
              src={IMAGE_ENDPOINT(artwork.image_id as string)}
              alt={artwork.thumbnail?.alt_text ?? ""}
            />
          </ImageFigure>
          {/* </Link> */}
        </StubImage>
        <BookmarkButton
          profile={true}
          id={artwork.id}
          aria-label="Bookmark this item"
        />
      </Figure>

      {showingPopup && (
        <Popup onClose={() => setShowingPopup(false)}>
          <img
            src={IMAGE_ENDPOINT(artwork.image_id as string)}
            alt={artwork.thumbnail?.alt_text ?? ""}
          />
        </Popup>
      )}

      <Article>
        <header>
          <ArticleTitle>{artwork.title}</ArticleTitle>
          <Important>{artwork.artist_title}</Important>
          <b>{artwork.date_display}</b>
        </header>

        <section>
          <ArticleTitle>Overview</ArticleTitle>

          <ul>
            <ListItem>
              <Key>Artist Nationality:</Key> {artwork.artist_display}
            </ListItem>
            <ListItem>
              <Key>Dimensions of Sheet:</Key> {artwork.dimensions}
            </ListItem>
            <ListItem>
              <Key>Credit Line:</Key> {artwork.credit_line}
            </ListItem>
            <ListItem>
              <Key>Repository:</Key>
              {artwork.on_loan_display ? (
                SafeHtml(artwork.on_loan_display)
              ) : (
                <p>Private collections</p>
              )}
            </ListItem>
          </ul>
          <p>{artwork.on_loan_display ? "Public" : "Private"}</p>
        </section>
      </Article>
    </MainHorizontal>
  );
}
