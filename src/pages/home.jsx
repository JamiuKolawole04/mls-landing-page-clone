import { Fragment } from "react";

import { Header, Hero, FindEstate, WhatIsMls } from "../components";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <FindEstate />
      <WhatIsMls />
    </Fragment>
  );
};
