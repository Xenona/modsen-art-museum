import { BookmarkButton } from '@components/BookmarkButton';
import {
  Author,
  Card,
  Content,
  PublicDomain,
  Thumbnail,
  Title,
} from './styled';
import { Link } from 'react-router-dom';
import { Art } from '@components/SpecialGallery';
import { IMAGE_LOWQ_ENDPOINT } from '@constants/api';

export function InfoCard({
  data,
  withImage,
}: {
  data: Art;
  withImage: boolean;
}) {
  return (
    <Link to={`/artwork/${data.id}`}>
      <Card $withImage={withImage}>
        {withImage && (
          <Thumbnail
            src={IMAGE_LOWQ_ENDPOINT(data.image_id)}
            alt={data.thumbnail?.alt_text ?? ''}
          />
        )}
        <Content>
          <Title>{data.title}</Title>
          <Author>{data.artist_title}</Author>
          <PublicDomain>
            {data.on_loan_display ? 'Public' : 'Private'}
          </PublicDomain>
        </Content>
        <BookmarkButton id={data.id} />
      </Card>
    </Link>
  );
}
