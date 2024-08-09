import { Main, StyledH1 } from "@pages/home/styled";

export function Error({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <StyledH1>{children}</StyledH1>
    </Main>
  );
}
