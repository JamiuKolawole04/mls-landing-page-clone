import { Link } from "react-router-dom";

export const EstateSearches = () => {
  return (
    <section className="estate-search__section">
      <h4 className="center-text">Popular Real Estate Searches</h4>

      <div className="center-text link__wrapper">
        <Link to="/">
          Atlanta MLS <span className="upright__dash">|</span>
        </Link>

        <Link to="/">
          Chicago MLS <span className="upright__dash">|</span>
        </Link>

        <Link to="/">
          Dallas MLS <span className="upright__dash">|</span>
        </Link>

        <Link to="/">
          Los Angeles MLS <span className="upright__dash">|</span>
        </Link>

        <Link to="/">
          New York MLS <span className="upright__dash">|</span>
        </Link>

        <Link to="/">
          Orlando MLS <span className="upright__dash">|</span>
        </Link>

        <Link to="/">
          San Diego MLS <span className="upright__dash">|</span>
        </Link>

        <Link to="/">
          San Francisco MLS <span className="upright__dash">|</span>
        </Link>
        <Link to="/">Seattle MLS</Link>
      </div>
    </section>
  );
};
