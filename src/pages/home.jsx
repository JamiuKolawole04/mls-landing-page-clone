import { Fragment } from "react";

import { Header, Hero, FindEstate } from "../components";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <FindEstate />
    </Fragment>
  );
};
