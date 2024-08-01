import { InfoCard } from '@components/InfoCard';
import './styles.css';
import { IData } from '@components/ArtworkCard';

export function ShortGallery() {
  // TODO fetch random 12 works
  const data: IData = {
    imgSrc:
      'https://www.artic.edu/iiif/2/21cfd347-e6aa-6a11-f1e7-bf84a4e87a3d/full/843,/0/default.jpg',
    title: 'The Beach at Sainte-Adresse',
    artist: 'Claude Monet',
    isPublicDomain: true,
    altText:
      'Painting of a beach on a cloudy day with several sailboats on the water, a few rowboats on the shore, and two groupings of people on the sand.',
    id: 1,
  };
  return (
    <div className="shortGal">
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
      <InfoCard data={data} withImage={true} />
    </div>
  );
}
