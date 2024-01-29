import React, { useState } from "react";

const ColorForm = () => {
  const [color, setColor] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSaveColor = () => {
    localStorage.setItem("userColor", color);
  };

  return (
    <div className="container mx-2">
      <div className="container-fluid bg-primary-subtle p-5">
        <label>
          Ingrese un color:
          <input
            className="container m-2"
            type="text"
            value={color}
            onChange={handleColorChange}
          />
        </label>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary m-3" onClick={handleSaveColor}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ColorForm;
