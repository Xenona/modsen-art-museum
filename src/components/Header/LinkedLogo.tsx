import { Link } from "react-router-dom";
import { Logo } from "./LinkedLogo.styled";
export function LinkedLogo({
  img,
  link,
  alt,
}: {
  img: string;
  link: string;
  alt: string;
}) {
  return (
    <Link to={link}>
      <Logo src={img} alt={alt} />
    </Link>
  );
}
