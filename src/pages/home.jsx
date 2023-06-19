import { Fragment } from "react";

import {
  Header,
  Hero,
  FindEstate,
  WhatIsMls,
  EstateSearches,
  Footer,
} from "../components";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <FindEstate />
      <WhatIsMls />
      <EstateSearches />
      <Footer />
    </Fragment>
  );
};
