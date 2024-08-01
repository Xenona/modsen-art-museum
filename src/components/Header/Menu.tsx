import { NavLink } from 'react-router-dom';
import homeIcon from '@assets/icons/home.svg';
import bookmarkIcon from '@assets/icons/bookmark.svg';
import { Nav } from './styled';

export function Menu() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">
            <img src={homeIcon} alt="Home icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/fav">
            <img src={bookmarkIcon} alt="Bookmark icon" />
            Your favorites
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}
