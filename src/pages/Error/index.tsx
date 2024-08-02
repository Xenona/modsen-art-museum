import { Main } from '@pages/home/styled';
import { StyledH1 } from '@components/HeadLine/styled';

export function Error({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <StyledH1>{children}</StyledH1>
    </Main>
  );
}
