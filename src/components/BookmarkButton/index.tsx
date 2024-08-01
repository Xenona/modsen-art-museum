import './styles.css';
import bookmarkIcon from '@assets/icons/bookmark.svg';
import bookmarkFilledIcon from '@assets/icons/bookmark_filled.svg';
import { useState } from 'react';

export function BookmarkButton() {
  // TODO: attach localstorage
  const [isSavedToFav] = useState<boolean>(false);

  return (
    <button>
      {isSavedToFav ? (
        <img
          src={bookmarkFilledIcon}
          alt="Filled bookmark icon meaning the work was marked as favourite"
        />
      ) : (
        <img
          src={bookmarkIcon}
          alt="Empty bookmark icon meaning the artwork is not in the favourites"
        />
      )}
    </button>
  );
}
