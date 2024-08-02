import { ErrorPage } from '@pages/Error';

export function ServerError() {
  return (
    <ErrorPage>
      <span>500</span> — something wrong has happened!
    </ErrorPage>
  );
}
