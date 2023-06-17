import React from "react";
import { Formik, Form } from "formik";

import { CustomInput } from "./customInput";
import { SearchEstateForm } from "./searchEstateForm";
import { CustomSelect } from "./customSelect";
import { SearchBtn } from "./searchBtn";

export const FindEstate = () => {
  return (
    <section className="estate ">
      <div className="center-text">
        <h3>Find Real Estate</h3>
        <p>Click on a State to View MLS Listing in your Area</p>
        <div className="center-text d-flex justify-center">
          <div className="green__section"></div>
        </div>
      </div>

      <div className="form__container d-flex justify-between align-center">
        <SearchEstateForm
          heading="Find Real Estate Listings"
          subHeading="Search for listings near you."
        >
          <Formik
            initialValues={{
              city: "",
              zip: "",
              country: "",
              jobType: "",
            }}
          >
            <Form>
              <CustomInput
                label="City"
                name="city"
                type="text"
                placeholder="City"
              />

              <CustomSelect name="jobType" placeholder="Select State">
                <option value="">Select State</option>
                <option value="designer">Designer</option>
                <option value="developer">Developer</option>
                <option value="manager">Developer</option>
                <option value="other">Other</option>
              </CustomSelect>

              <CustomInput
                label="Zip"
                name="zip"
                type="text"
                placeholder="Zip"
              />
              <CustomInput
                label="Country"
                name="country"
                type="text"
                placeholder="Country"
              />
            </Form>
          </Formik>

          <SearchBtn />
        </SearchEstateForm>

        <SearchEstateForm
          heading="Find New Homes"
          subHeading="Search for new home listings near you."
        >
          <SearchBtn poweredText />
        </SearchEstateForm>

        <SearchEstateForm
          heading="Find Foreclosures"
          subHeading="Search for listings near you."
        />
      </div>
    </section>
  );
};
