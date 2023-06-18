import { SearchBtn } from "./searchBtn";

export const SearchEstateForm = ({
  heading,
  subHeading,
  isLoginForm,
  children,
}) => {
  return (
    <div>
      <h3>{heading}</h3>
      {isLoginForm && (
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="login_bth__wrapper"
        >
          <SearchBtn isLoginBtn />
        </div>
      )}

      <p>{subHeading}</p>

      {children}
    </div>
  );
};
