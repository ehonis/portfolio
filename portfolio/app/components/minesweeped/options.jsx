import React, { useState } from "react";

export default function options() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex">
      <div className="flex p-5 justify-between">
        <label htmlFor="dropdown" className="p-1">
          Difficulty :
        </label>
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="custom">Custom</option>
        </select>
      </div>
    </div>
  );
}
