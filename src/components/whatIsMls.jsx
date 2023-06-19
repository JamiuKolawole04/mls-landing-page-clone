import React from "react";

import { GreenLine } from "./greenLine";
import { MlsState } from "./mlsState";

export const WhatIsMls = () => {
  return (
    <section className="mls-features" data-aos="zoom-out-right">
      <h3 className="center-text">
        What is MLS.com<sup>®</sup>?
      </h3>
      <GreenLine />

      <div className="mls-features__article">
        <article>
          <p>
            MLS.com® is a free MLS search to find real estate listings for sale
            by Realtors® and other realty <br /> professionals that are members
            of your local MLS Multiple Listing Service. MLS.com® also features
            foreclosures, new construction, international properties and real
            estate classes. Find homes for sale, new homes and resale homes, new
            construction, acreage, lots, land, commercial properties and
            investment properties. MLS.com is independently owned and operated
            and is not affiliated with any of the over 900 local MLS systems. On
            MLS.com you can list your properties and reach our global audience.
          </p>
        </article>
      </div>

      <div>
        <MlsState />
      </div>
    </section>
  );
};
