import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { cities } from "../cities";

const Dropdown = () => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  return (
    <div>
      <div className="dropdown-toggle">
        <button
          onClick={() => setIsDropdownShown((prev) => !prev)}
          className="relative"
        >
          <span>
            {isDropdownShown ? "0 selected" : "-- Select your choice --"}
          </span>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <ChevronDown size={20} />
          </span>
        </button>
      </div>
      <div className="panel">
        {isDropdownShown &&
          cities.map((city) => (
            <div>
              <input id={`checkbox-${city}`} type="checkbox" />
              <label className="checkbox-label" htmlFor={`checkbox-${city}`}>
                {city}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
