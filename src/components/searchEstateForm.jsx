export const SearchEstateForm = ({ heading, subHeading, children }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{subHeading}</p>

      {children}
    </div>
  );
};
