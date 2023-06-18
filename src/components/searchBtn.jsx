export const SearchBtn = ({ poweredText, isLoginBtn }) => {
  return (
    <div className="d-flex search__btn__wrapper align-center justify-between">
      <button
        style={{ backgroundColor: isLoginBtn ? "#0753a8" : "var(--mainGreen)" }}
        className="search-btn"
      >
        {isLoginBtn ? "LOGIN" : "SEARCH"}
      </button>
      ;
      {poweredText && (
        <p>
          powered by
          <a href="https://www.newhomesource.com/">NewHomeSource.com</a>
        </p>
      )}
    </div>
  );
};
