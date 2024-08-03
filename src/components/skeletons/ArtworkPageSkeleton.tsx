import {
  SkeletonArticle,
  SkeletonFigure,
  SkeletonListItem,
  SkeletonMainHorizontal,
  SkeletonParagraph,
  SkeletonTitle,
} from "./ArtworkPageSkeleton.styled";

export const ArtworkPageSkeleton = () => {
  return (
    <SkeletonMainHorizontal>
      <SkeletonFigure />
      <SkeletonArticle>
        <SkeletonTitle />
        <SkeletonParagraph />
        <SkeletonListItem />
        <SkeletonListItem />
        <SkeletonListItem />
        <SkeletonListItem />
      </SkeletonArticle>
    </SkeletonMainHorizontal>
  );
};
