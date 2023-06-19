import { Fragment } from "react";

import {
  Header,
  Hero,
  FindEstate,
  WhatIsMls,
  EstateSearches,
} from "../components";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <FindEstate />
      <WhatIsMls />
      <EstateSearches />
    </Fragment>
  );
};
