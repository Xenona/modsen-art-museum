import { BookmarkButton } from '@components/BookmarkButton';
import './styles.css';
import {
  Author,
  Card,
  Content,
  PublicDomain,
  Thumbnail,
  Title,
} from './styled';
import { Link } from 'react-router-dom';

export function InfoCard({
  id,
  withImage,
}: {
  id: number;
  withImage: boolean;
}) {
  // TODO: fetch appropriate data

  const data = {
    imgSrc:
      'https://www.artic.edu/iiif/2/95be2572-b53d-8e7b-abc9-10eb48d4fa5d/full/843,/0/default.jpg',
    title: 'The Beach at Sainte-Adresse',
    artist: 'Claude Monet',
    isPublicDomain: true,
    altText:
      'Painting of a beach on a cloudy day with several sailboats on the water, a few rowboats on the shore, and two groupings of people on the sand.',
    id,
  };

  return (
    <Link to={`/artwork/${data.id}`}>
      <Card>
        {withImage && <Thumbnail src={data.imgSrc} alt={data.altText} />}
        <Content>
          <Title>{data.title}</Title>
          <Author>{data.artist}</Author>
          <PublicDomain>
            {data.isPublicDomain ? 'Public' : 'Private'}
          </PublicDomain>
        </Content>
        <BookmarkButton id={data.id} />
      </Card>
    </Link>
  );
}
