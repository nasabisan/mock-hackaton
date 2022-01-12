import React from "react";

function NavBar() {
  return (
    <div>
      <li class="nav-item">
        <a class="nav-link" href="/">
          See all promotions
        </a>
      </li>
      <form class="d-flex mx-auto">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search Products"
          aria-label="Search"
        />
        <button class="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default NavBar;
