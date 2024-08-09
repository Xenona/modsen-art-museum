import { Error } from "@pages/Error";

export function NotFound() {
  return (
    <Error>
      <span>404</span> — page was not found!
    </Error>
  );
}
