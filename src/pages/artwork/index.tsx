import { useParams } from 'react-router-dom';

export function ArtworkPage() {
  const { id } = useParams();
  return <>Artwork page - {id}</>;
}
