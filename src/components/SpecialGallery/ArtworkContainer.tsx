import { IMAGE_LOWQ_ENDPOINT } from '@constants/api';
import { ArtworkCard, Image, ImageFigure, Text } from './ArtworkCard.styled';
import { InfoCard } from '@components/InfoCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiController } from '@utils/ApiController';
import { dataSchema } from '.';
import { ArtworkContainer as Card } from './styled';
import { StubImage } from '@components/StubImage';

export function ArtworkContainer({ page }: { page: number }) {
  // const navigate = useNavigate();
  console.log('rendering ', page);

  const { data, error, isFetching } = useSuspenseQuery({
    queryKey: ['page', page],
    queryFn: () => ApiController.getPage({ page: page - 1 }),
  });

  if (error && !isFetching) {
    throw error;
  }
  if (isFetching) return <p>Loading...</p>;

  const parsedData = dataSchema.safeParse(data);
  console.log(parsedData, data);

  if (!parsedData.success) throw new Error('ZOD lol');

  return (
    <Card>
      {parsedData.data.data.map((art) => (
        <ArtworkCard key={art.id}>
          <ImageFigure>
            {art.image_id ? (
              <Image
                src={IMAGE_LOWQ_ENDPOINT(art.image_id)}
                alt={data.thumbnail?.alt_text ?? ''}
              />
            ) : (
              <StubImage />
            )}
          </ImageFigure>
          <Text>
            <InfoCard data={data} withImage={false} />
          </Text>
        </ArtworkCard>
      ))}
    </Card>
  );
}
