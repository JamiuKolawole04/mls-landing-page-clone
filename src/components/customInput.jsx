import { Fragment } from "react";
import { useField } from "formik";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  console.log({ field, meta, helpers });
  return (
    <Fragment>
      <label>{label}</label>
      {/* spreading field objexts from useField */}
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </Fragment>
  );
};
