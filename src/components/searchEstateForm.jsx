import { Formik, Form } from "formik";

import { CustomInput } from "./customInput";

export const SearchEstateForm = ({ heading, subHeading, inputType }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{subHeading}</p>

      <Formik
        initialValues={{
          city: "",
          zip: "",
          country: "",
        }}
      >
        <Form>
          <CustomInput
            label="City"
            name="city"
            type="text"
            placeholder="City"
          />

          <CustomInput label="Zip" name="zip" type="text" placeholder="Zip" />
          <CustomInput
            label="Country"
            name="country"
            type="text"
            placeholder="Country"
          />
        </Form>
      </Formik>
    </div>
  );
};
