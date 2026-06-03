import React, { useState } from 'react';

const GastoForm = ({ categorias, onAgregarGasto }) => {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica de campos vacíos
    if (!descripcion || !monto || !categoria || !fecha) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Invocar la función prop de inserción
    onAgregarGasto({
      descripcion,
      monto: parseFloat(monto),
      categoria,
      fecha
    });

    // Resetear formulario
    setDescripcion('');
    setMonto('');
    setCategoria('');
    setFecha('');
  };

  return (
    <form className="gasto-form" onSubmit={handleSubmit}>
      <h2>Registrar Nuevo Gasto</h2>
      
      <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <input
          id="descripcion"
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Ej. Supermercado, Combustible"
        />
      </div>

      <div className="form-group">
        <label htmlFor="monto">Monto ($):</label>
        <input
          id="monto"
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="Ej. 1500"
        />
      </div>

      <div className="form-group">
        <label htmlFor="categoria">Categoría:</label>
        <select 
          id="categoria" 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccione una categoría</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.nombre}>
              {cat.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="fecha">Fecha:</label>
        <input
          id="fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-submit">Agregar Gasto</button>
    </form>
  );
};

export default GastoForm;


