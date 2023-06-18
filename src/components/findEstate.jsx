import React from "react";
import { Formik, Form } from "formik";

import { CustomInput } from "./customInput";
import { SearchEstateForm } from "./searchEstateForm";
import { CustomSelect } from "./customSelect";
import { SearchBtn } from "./searchBtn";
import { states, prices } from "../library";

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
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
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
                placeholder="Zip, City, Country"
              />

              <CustomSelect name="jobType" placeholder="Select State">
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </CustomSelect>

              <CustomSelect name="jobType" placeholder="No Minimumn">
                <option value="">No minimum</option>
                {prices.map((price, index) => (
                  <option key={index} value={price}>
                    ${price}
                  </option>
                ))}
              </CustomSelect>

              <CustomSelect name="jobType" placeholder="No Maximum State">
                <option value="">No maximum</option>
                {prices.map((price, index) => (
                  <option key={index} value={price}>
                    ${price}
                  </option>
                ))}
              </CustomSelect>
            </Form>
          </Formik>

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
