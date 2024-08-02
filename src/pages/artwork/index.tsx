import { BookmarkButton } from "@components/BookmarkButton";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Article,
  ArticleTitle,
  Figure,
  Important,
  Key,
  ListItem,
  MainHorizontal,
} from "./styled";
import { Art } from "@components/SpecialGallery";
import { IMAGE_HIGHQ_ENDPOINT } from "@constants/api";
import {
  Image,
  ImageFigure,
} from "@components/SpecialGallery/ArtworkCard.styled";
import { StubImage } from "@components/StubImage";
export function ArtworkPage() {
  const { id } = useParams();
  const { state } = useLocation();

  const data: Art = state;

  let a = !!data.image_id ? IMAGE_HIGHQ_ENDPOINT(data.image_id) : "";

  console.log(data.image_id, a);

  return (
    <MainHorizontal>
      <Figure >
        {!!data.image_id ? (
          <Link to={IMAGE_HIGHQ_ENDPOINT(data.image_id)}>
            <ImageFigure>
              <Image
                src={IMAGE_HIGHQ_ENDPOINT(data.image_id)}
                alt={data.thumbnail?.alt_text ?? ""}
              />
            </ImageFigure>
          </Link>
        ) : (
          <StubImage />
        )}
        <BookmarkButton
          profile={true}
          id={data.id}
          aria-label="Bookmark this item"
        />
      </Figure>

      <Article>
        <header>
          <ArticleTitle>{data.title}</ArticleTitle>
          <Important>{data.artist_title}</Important>
          <b>{data.date_display}</b>
        </header>

        <section>
          <ArticleTitle>Overview</ArticleTitle>

          <ul>
            <ListItem>
              <Key>Artist Nationality:</Key> {data.artist_display}
            </ListItem>
            <ListItem>
              <Key>Dimensions of Sheet:</Key> {data.dimensions}
            </ListItem>
            <ListItem>
              <Key>Credit Line:</Key> {data.credit_line}
            </ListItem>
            <ListItem>
              <Key>Repository:</Key> {data.on_loan_display ? data.on_loan_display : "Private collections"}
            </ListItem>
          </ul>
          <p>{data.on_loan_display ? "Public" : "Private"}</p>
        </section>
      </Article>
    </MainHorizontal>
  );
}
