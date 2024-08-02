import { IMAGE_LOWQ_ENDPOINT } from '@constants/api';
import { ArtworkCard, Image, ImageFigure, Text } from './ArtworkCard.styled';
import { InfoCard } from '@components/InfoCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiController } from '@utils/ApiController';
import { ArtworkContainer as Card } from './styled';
import { StubImage } from '@components/StubImage';

export function ArtworkContainer({ page }: { page: number }) {

  const { data: artworks, error } = useSuspenseQuery({
    queryKey: ['page', page],
    queryFn: () => ApiController.getPage({ page }),
  });

  if (error) throw error;

  return (
    <Card>
      {artworks.map((art) => (
        <ArtworkCard key={art.id}>
          <ImageFigure>
            {art.image_id ? (
              <Image
                src={IMAGE_LOWQ_ENDPOINT(art.image_id)}
                alt={art.thumbnail?.alt_text ?? ''}
              />
            ) : (
              <StubImage />
            )}
          </ImageFigure>
          <Text>
            <InfoCard data={art} withImage={false} />
          </Text>
        </ArtworkCard>
      ))}
    </Card>
  );
}
