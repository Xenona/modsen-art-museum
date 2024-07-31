import { NavLink } from 'react-router-dom';
import homeIcon from '@assets/icons/home.svg';
import bookmarkIcon from '@assets/icons/bookmark.svg';
import { Nav } from './styled';

export function Menu() {
  return (
    <Nav>
      <ul>
        <li>
          <img src={homeIcon} alt="Home icon" />
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <img src={bookmarkIcon} alt="Bookmark icon" />
          <NavLink to="/fav">Your favorites</NavLink>
        </li>
      </ul>
    </Nav>
  );
}
