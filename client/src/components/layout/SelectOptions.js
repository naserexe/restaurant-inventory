import React, { useEffect } from "react";

const SelectOptions = ({ value }) => {
  let options = useEffect(() => {
    return (options = (
      <select>
        <option defaultValue>Choose your option</option>
        {value.map(i => {
          return (
            <option key={i._id} value={i.name}>
              {i.name}
            </option>
          );
        })}
      </select>
    ));
  }, []);

  return options;
};

export default SelectOptions;
