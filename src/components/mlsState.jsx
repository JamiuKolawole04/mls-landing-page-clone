import React from "react";

import {
  MLSState1,
  MLSState2,
  MLSState3,
  MLSState4,
  MLSState5,
  MLSState6,
} from "../library";

export const MlsState = () => {
  return (
    <div className="mls-state__container">
      <div>
        <ul>
          {MLSState1.map((item, i) => (
            <li key={i}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {MLSState2.map((item, i) => (
            <li key={i}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {MLSState3.map((item, i) => (
            <li key={i}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {MLSState4.map((item, i) => (
            <li key={i}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {MLSState5.map((item, i) => (
            <li key={i}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {MLSState6.map((item, i) => (
            <li key={i}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
