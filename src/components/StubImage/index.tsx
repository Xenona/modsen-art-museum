import { StubImage as Image } from "./styled";
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
      <Image>
        <img src={GreekFacade} alt="Yellow Ancient Greek facade" />
      </Image>
    );
  } else {
    return <>{children}</>;
  }
}
