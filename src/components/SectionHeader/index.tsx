import { BottomText, HeaderGroup, TopText } from './styles';

export function SectionHeader({
  topText,
  bottomText,
}: {
  topText: string;
  bottomText: string;
}) {
  return (
    <HeaderGroup>
      <TopText>{topText}</TopText>
      <BottomText>{bottomText}</BottomText>
    </HeaderGroup>
  );
}
