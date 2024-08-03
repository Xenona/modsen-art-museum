import { StubImage as StImage } from "./styled";
import GreekFacade from "@assets/icons/greek_facade.svg";

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
