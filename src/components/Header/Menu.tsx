import bookmarkIcon from "@assets/icons/bookmark.svg";
import homeIcon from "@assets/icons/home.svg";
import { memo } from "react";
import { NavLink } from "react-router-dom";

import { Nav } from "./styled";

const MemoizedHomeIcon = memo(function HomeIcon() {
  return <img src={homeIcon} aria-label="Navigate home" />;
});

const MemoizedBookmarkIcon = memo(function BookmarkIcon() {
  return <img src={bookmarkIcon} aria-label="Navigate to favorites" />;
});

export function Menu() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">
            <MemoizedHomeIcon />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/fav">
            <MemoizedBookmarkIcon />
            Your favorites
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}
