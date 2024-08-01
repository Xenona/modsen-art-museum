import { BottomText, HeaderGroup } from './styles';

export function SectionHeader({
  topText,
  bottomText,
}: {
  topText: string;
  bottomText: string;
}) {
  return (
    <HeaderGroup>
      <h4>{topText}</h4>
      <BottomText>{bottomText}</BottomText>
    </HeaderGroup>
  );
}
