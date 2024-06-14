import React, { useState } from "react";

export default function options() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="p-5 flex">
      <div className="flex p-5 bg-stone-800 rounded-lg">
        <label
          htmlFor="dropdown"
          className="p-1 font-bold text-white rounded-lg"
        >
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
