import bookmarkIcon from "@assets/icons/bookmark.svg";
import bookmarkFilledIcon from "@assets/icons/bookmark_filled.svg";
import { useFavStorageContext } from "@components/FavStorageProvider";
import { useState } from "react";
import { ButtonIcon, BookmarkButtonStyled } from "./styled";

export function BookmarkButton({
  id,
  profile,
}: {
  id: number;
  profile?: boolean;
}) {
  const favStorageContext = useFavStorageContext();
  const [isSavedToFav, setIsSavedToFav] = useState<boolean>(
    favStorageContext.check(id),
  );

  const handleClick = (id: number) => {
    setIsSavedToFav(!isSavedToFav);
    if (isSavedToFav) {
      favStorageContext.remove(id);
    } else {
      favStorageContext.save(id);
    }
  };

  return (
    <BookmarkButtonStyled
      $profile={profile}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleClick(id);
      }}
    >
      {isSavedToFav ? (
        <ButtonIcon
          src={bookmarkFilledIcon}
          alt="Filled bookmark icon meaning the work was marked as favourite"
        />
      ) : (
        <ButtonIcon
          src={bookmarkIcon}
          alt="Empty bookmark icon meaning the artwork is not in the favourites"
        />
      )}
    </BookmarkButtonStyled>
  );
}
