import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import ColorForm from './components/ColorForm.jsx';

const App = () => {
  return (
    <section>
      <h1 className='container-fluid text-bg-dark text-center p-2'>Color Palette</h1>
      <div className='container m-3 card card-body shadow'> 
        <span className='my-2'>Administrar colores</span>
        <ColorForm />
      </div>
    </section>
  );
};

export default App;
