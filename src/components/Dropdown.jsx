import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { cities } from "../cities";

const Dropdown = () => {
  const [isDropdownShown, setIsDropdownShown] = useState(true);
  return (
    <div>
      <div className="dropdown-toggle">
        <button>
          -- Select your choice --
          <span>
            <ChevronDown size={20} />
          </span>
        </button>
      </div>
      <div className="panel">
        {isDropdownShown &&
          cities.map((city) => (
            <div>
              <input id={`checkbox-${city}`} type="checkbox" />
              <label htmlFor={`checkbox-${city}`}>{city}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
