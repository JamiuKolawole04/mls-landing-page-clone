import React from "react";
import { Formik, Form } from "formik";

import { CustomInput } from "./customInput";
import { SearchEstateForm } from "./searchEstateForm";
import { CustomSelect } from "./customSelect";
import { SearchBtn } from "./searchBtn";
import { states, prices } from "../library";
import { GreenLine } from "./greenLine";
import map from "../assets/images/map.png";

export const FindEstate = () => {
  return (
    <section className="estate ">
      <div className="center-text">
        <h3>Find Real Estate</h3>
        <p>Click on a State to View MLS Listing in your Area</p>
        <GreenLine />

        <div className="map__container">
          <img src={map} alt="map-img" />
        </div>
      </div>

      <div className="form__container d-grid">
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
          subHeading="Search for foreclosure listings near you."
          isLoginForm
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
              <div className="foreclosure__form d-flex justify-between">
                <div>
                  <CustomInput
                    label="City"
                    name="city"
                    type="text"
                    placeholder="City"
                  />
                </div>

                <div>
                  <CustomSelect name="jobType" placeholder="Select State">
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </CustomSelect>
                </div>
              </div>

              <p className="foreclosure__form_paragraph">or</p>

              <div className="foreclosure__form d-flex justify-between">
                <div>
                  <CustomInput
                    label="Country"
                    name="country"
                    type="text"
                    placeholder="Country"
                  />
                </div>

                <div>
                  <CustomSelect name="jobType" placeholder="Select State">
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </CustomSelect>
                </div>
              </div>

              <p className="foreclosure__form_paragraph">or</p>

              <CustomInput
                label="Zipp"
                name="city"
                type="text"
                placeholder="Zip"
              />
            </Form>
          </Formik>
          <SearchBtn />
        </SearchEstateForm>
      </div>
    </section>
  );
};
