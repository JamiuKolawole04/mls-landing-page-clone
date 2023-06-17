import React from "react";

import { SearchEstateForm } from "./searchEstateForm";

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
        />

        <SearchEstateForm
          heading="Find New Homes"
          subHeading="Search for new home listings near you."
        />

        <SearchEstateForm
          heading="Find Foreclosures"
          subHeading="Search for listings near you."
        />
      </div>
    </section>
  );
};
