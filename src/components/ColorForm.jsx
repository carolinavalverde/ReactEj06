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
    <div className="container my-3">
      <label>
        Ingrese un color:
        <input type="text" value={color} onChange={handleColorChange} />
      </label>
      <button onClick={handleSaveColor}>Guardar</button>
    </div>
  );
};

export default ColorForm;
