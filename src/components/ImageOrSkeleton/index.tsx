import { Thumbnail } from "@components/InfoCard/styled";
import { BigImageSkeleton } from "@components/skeletons/BigImageSkeleton.styled";
import { ThumbnailSkeleton } from "@components/skeletons/ThumbnailSkeleton.styled";
import { BigImage } from "@components/SpecialGallery/ArtworkCard.styled";
import { useState } from "react";

export function SkeletonOrImage({
  isThumbnail = false,
  src,
  alt,
}: {
  isThumbnail?: boolean;
  src: string;
  alt: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading &&
        (isThumbnail ? <ThumbnailSkeleton /> : <BigImageSkeleton />)}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: "none" }}
      />
      {!isLoading &&
        (isThumbnail ? (
          <Thumbnail src={src} alt={alt} />
        ) : (
          <BigImage src={src} alt={alt} />
        ))}
    </>
  );
}
