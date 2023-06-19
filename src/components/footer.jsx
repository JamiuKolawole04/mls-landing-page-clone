import { Link } from "react-router-dom";

import {
  companySearchLinks,
  propertySearchLinks,
  resourceLinks,
} from "../library";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__link">
          <div>
            <h3>Company</h3>
            <ul>
              {companySearchLinks.map(({ link, path }, i) => (
                <li key={i}>
                  <Link to={path}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Property Search</h3>
            <ul>
              {propertySearchLinks.map(({ link, path }, i) => (
                <li key={i}>
                  <Link to={path}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              {resourceLinks.map(({ link, path }, i) => (
                <li key={i}>
                  <Link to={path}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="mls-footer__paragraph"> */}
          <p>
            Multiple Listing Network<sup>®</sup> is the parent company of and
            DBA MLS.com<sup>®</sup>. Multiple Listing Network<sup>®</sup> is an
            independently owned and operated Real Estate Advertising and Listing
            Service Company for real estate firms and other real estate related
            entities. MLS.com is independently owned and operated and is not
            affiliated with any of the over 900 local MLS systems. Your use of
            this web site constitutes your acceptance of our{" "}
            <Link to="/">Privacy Policy</Link> and
            <Link to="/">Terms of Use</Link> . Multiple Listing Network
            <sup>®</sup> and "MLS.com America's Real Estate Portal" are
            federally registered Servicemarks.
          </p>
          {/* </div> */}
        </div>

        <div className="center-text copyright__texts">
          <p>
            Multiple Listing Network Copyright 1991 - 2023 | MLS.com America's
            Real Estate Portal Copyright 2007 - 2023.
          </p>

          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
