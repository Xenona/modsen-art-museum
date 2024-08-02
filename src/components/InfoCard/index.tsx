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
import { IData } from '@components/ArtworkCard';

export function InfoCard({
  data,
  withImage,
}: {
  data: IData;
  withImage: boolean;
}) {
  return (
    <Link to={`/artwork/${data.id}`}>
      <Card $withImage={withImage}>
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
