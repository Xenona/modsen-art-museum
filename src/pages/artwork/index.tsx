import { IData } from '@components/ArtworkCard';
import { BookmarkButton } from '@components/BookmarkButton';
import { Link } from 'react-router-dom';
import {
  RectImage,
  Article,
  ArticleTitle,
  Figure,
  Important,
  Key,
  ListItem,
  MainHorizontal,
} from './styled';
export function ArtworkPage() {
  // const { id } = useParams();

  // TODO fetch actual data by that id
  const data: IData = {
    imgSrc:
      'https://t4.ftcdn.net/jpg/03/28/70/65/360_F_328706579_bG2atiqLbtMa7VayR93qoJagX6hxxhLO.jpg',
    title: 'The Beach at Sainte-Adresse',
    artist: 'Claude Monet',
    isPublicDomain: true,
    altText:
      'Painting of a beach on a cloudy day with several sailboats on the water, a few rowboats on the shore, and two groupings of people on the sand.',
    id: 1,
    year: '1234-5433',
    artistNationality: 'German',
    creditLine: 'Rogers Fund, 1917',
    dimensions: ' 19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)',
    repository: 'Metropolitan Museum of Art, New York, NY',
  };

  return (
    <MainHorizontal>
      <Figure>
        <Link to={data.imgSrc}>
          <RectImage src={data.imgSrc} alt={data.altText} />
        </Link>
        <BookmarkButton
          profile={true}
          id={data.id}
          aria-label="Bookmark this item"
        />
      </Figure>

      <Article>
        <header>
          <ArticleTitle>{data.title}</ArticleTitle>
          <Important>{data.artist}</Important>
          <b>{data.year}</b>
        </header>

        <section>
          <ArticleTitle>Overview</ArticleTitle>

          <ul>
            <ListItem>
              <Key>Artist Nationality:</Key> {data.artistNationality}
            </ListItem>
            <ListItem>
              <Key>Dimensions of Sheet:</Key> {data.dimensions}
            </ListItem>
            <ListItem>
              <Key>Credit Line:</Key> {data.creditLine}
            </ListItem>
            <ListItem>
              <Key>Repository:</Key> {data.repository}
            </ListItem>
          </ul>
          <p>{data.isPublicDomain ? 'Public Domain' : 'Not Public Domain'}</p>
        </section>
      </Article>
    </MainHorizontal>
  );
}
