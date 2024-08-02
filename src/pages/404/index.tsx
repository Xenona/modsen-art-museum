import { ErrorPage } from '@pages/Error';

export function NotFound() {
  return (
    <ErrorPage>
      <span>404</span> — page was not found!
    </ErrorPage>
  );
}
