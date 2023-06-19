import React from "react";

export const EstateSearches = () => {
  return (
    <section className="estate-search__section">
      <h4 className="center-text">Popular Real Estate Searches</h4>

      <div className="center-text link__wrapper">
        <a href="/">
          Atlanta MLS <span className="upright__dash">| </span>
        </a>
        <a href="/">
          Chicago MLS <span className="upright__dash">| </span>
        </a>
        <a href="/">
          Dallas MLS <span className="upright__dash">| </span>
        </a>
        <a href="/">
          Los Angeles MLS <span className="upright__dash">| </span>
        </a>
        <a href="/">
          New York MLS <span className="upright__dash">| </span>
        </a>
        <a href="/">
          Orlando MLS <span className="upright__dash">| </span>
        </a>
        <a href="/">
          San Diego MLS <span className="upright__dash">| </span>
        </a>
        <a href="/">
          San Francisco MLS <span className="upright__dash">| </span>
        </a>
        <a href="/">Seattle MLS</a>
      </div>
    </section>
  );
};
