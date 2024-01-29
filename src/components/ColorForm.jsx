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
    <form
      className="container-fluid bg-primary-subtle my-2 p-5"
      onSubmit={handleSubmit}
    >
      <label className="d-flex justify-content-center">
        <input
          className="mx-2"
          type="text"
          value={color}
          onChange={handleColorChange}
          placeholder="Ingrese un color"
        />
      </label>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary my-2" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default ColorForm;
