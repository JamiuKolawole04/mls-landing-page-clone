import { NavLink } from "react-router-dom";

import websiteLogo from "../assets/images/mls_logo.png";

export const Header = () => {
  const navLinks = [
    {
      path: "/",
      display: "Foreclosures",
    },
    {
      path: "/",
      display: "New Homes",
    },
    {
      path: "/",
      display: "Find an Agent",
    },
    {
      path: "/",
      display: "Real Estate Classes",
    },
  ];

  return (
    <header className="d-flex justify-between">
      <img src={websiteLogo} alt="" />

      <nav>
        <ul id="header__nav">
          {navLinks.map(({ path, display }, index) => (
            <li key={index}>
              <NavLink to={path} key={index}>
                {display}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
