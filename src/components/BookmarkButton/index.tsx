import './styles.css';
import bookmarkIcon from '@assets/icons/bookmark.svg';
import bookmarkFilledIcon from '@assets/icons/bookmark_filled.svg';
import { useFavStorageContext } from '@components/FavStorageProvider';
import { useState } from 'react';

export function BookmarkButton(id: number) {
  const favStorageContext = useFavStorageContext();
  const [isSavedToFav, setIsSavedToFav] = useState<boolean>(
    favStorageContext.check(id),
  );

  const handleClick = (id: number) => {
    setIsSavedToFav(!isSavedToFav);
    if (isSavedToFav) {
      favStorageContext.save(id);
    } else {
      favStorageContext.remove(id);
    }
  };

  return (
    <button onClick={() => handleClick(id)}>
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
