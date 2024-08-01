import { SquareImg, Text, ArtworkCard as Card } from './styled';
import { InfoCard } from '@components/InfoCard';

export interface IData {
  imgSrc: string;
  title: string;
  artist: string;
  isPublicDomain: boolean;
  altText: string;
  id: number;
  year?: string;
  artistNationality?: string;
  dimensions?: string;
  creditLine?: string;
  repository?: string;
}

export function ArtworkCard({ id }: { id: number }) {
  // TODO: fetch appropriate data

  let data: IData;
  if (id === 1) {
    data = {
      imgSrc:
        'https://www.artic.edu/iiif/2/21cfd347-e6aa-6a11-f1e7-bf84a4e87a3d/full/843,/0/default.jpg',
      title: 'The Beach at Sainte-Adresse',
      artist: 'Claude Monet',
      isPublicDomain: true,
      altText:
        'Painting of a beach on a cloudy day with several sailboats on the water, a few rowboats on the shore, and two groupings of people on the sand.',
      id,
    };
  } else {
    data = {
      imgSrc:
        'https://www.artic.edu/iiif/2/907a7782-97d6-9cde-a8cb-1b9bea785ea1/full/843,/0/default.jpg',
      title: 'The Beach at Sainte-Adresse',
      artist: 'Claude Monet',
      isPublicDomain: true,
      altText:
        'Painting of a beach on a cloudy day with several sailboats on the water, a few rowboats on the shore, and two groupings of people on the sand.',
      id,
    };
  }

  return (
    <Card>
      <SquareImg src={data.imgSrc} alt={data.altText} />
      <Text>
        <InfoCard data={data} withImage={false} />
      </Text>
    </Card>
  );
}
