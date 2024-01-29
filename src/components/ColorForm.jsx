import React, { useState } from "react";

const ColorForm = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingrese un color:
        <input type="text" value={color} onChange={handleColorChange} />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ColorForm;
