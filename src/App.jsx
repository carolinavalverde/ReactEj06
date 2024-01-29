import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import ColorForm from './components/ColorForm.jsx';

const App = () => {
  return (
    <div>
      <h1 className='container-fluid text-bg-dark text-center p-2'>Color Palette</h1>
      <span className='container m-3'>Administrar colores</span>
      <ColorForm />
    </div>
  );
};

export default App;
