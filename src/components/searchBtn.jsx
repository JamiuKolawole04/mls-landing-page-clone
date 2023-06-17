export const SearchBtn = ({ poweredText }) => {
  return (
    <div className="d-flex search__btn__wrapper align-center justify-between">
      <button className="search-btn">SEARCH </button>;
      {poweredText && (
        <p>
          powered by
          <a href="https://www.newhomesource.com/">NewHomeSource.com</a>
        </p>
      )}
    </div>
  );
};
