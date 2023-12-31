import { Fragment } from "react";
import { useField } from "formik";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Fragment>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </Fragment>
  );
};
