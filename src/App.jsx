import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import ColorForm from './components/ColorForm';
import ColorGrid from './components/ColorGrid';

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem('colors')) || [];
    setColors(savedColors);
  }, []);

  const addColor = (color) => {
    const updatedColors = [...colors, color];
    setColors(updatedColors);
    localStorage.setItem('colors', JSON.stringify(updatedColors));
  };

  const deleteColor = (colorToDelete) => {
    const updatedColors = colors.filter((color) => color !== colorToDelete);
    setColors(updatedColors);
    localStorage.setItem('colors', JSON.stringify(updatedColors));
  };

  return (
    <div className="container-fluid mt-4">
      <h1>Color Palette</h1>
      <ColorForm addColor={addColor} />
      <hr />
      {colors.length > 0 ? (
        <ColorGrid colors={colors} deleteColor={deleteColor} />
      ) : (
        <p>No hay colores guardados.</p>
      )}
    </div>
  );
};

export default App;

