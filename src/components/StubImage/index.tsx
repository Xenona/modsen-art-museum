import GreekFacade from "@assets/icons/greek_facade.svg";

import { StubImage as StImage } from "./styled";

export function StubImage({
  condition,
  children,
}: {
  condition: boolean;
  children: React.ReactNode;
}) {
  if (!condition) {
    return (
      <StImage>
        <img src={GreekFacade} alt="Yellow Ancient Greek facade" />
      </StImage>
    );
  } else {
    return <>{children}</>;
  }
}
