import { Error } from '@pages/Error';

export function ServerError() {
  return (
    <Error>
      <span>500</span> — something wrong has happened!
    </Error>
  );
}
