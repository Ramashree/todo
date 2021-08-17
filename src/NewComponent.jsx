import React from "react";

const NewComponent = () => {
  const onChange = () => {};
  return (
    <div>
      <input type="text" />
      <select onChange={onChange}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
};

export default NewComponent;
