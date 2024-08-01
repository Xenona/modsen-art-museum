import './styles.css';

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
    <div>
      {withImage && <img src={data.imgSrc} alt={data.altText} />}
      <div>
        <h3></h3>
      </div>
    </div>
  );
}
