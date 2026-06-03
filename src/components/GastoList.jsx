import React from 'react';
import GastoItem from './GastoItem';

const GastoList = ({ gastos, categorias, categoriaSeleccionada, onCambiarFiltro, onEliminarGasto }) => {
  // Aplicar lógica de filtrado según categoría seleccionada
  const gastosFiltrados = categoriaSeleccionada
    ? gastos.filter(gasto => gasto.categoria === categoriaSeleccionada)
    : gastos;

  return (
    <div className="gasto-list-container">
      <div className="list-header">
        <h2>Listado de Gastos</h2>
        
        <div className="filter-group">
          <label htmlFor="filtro-categoria">Filtrar por Categoría: </label>
          <select
            id="filtro-categoria"
            value={categoriaSeleccionada}
            onChange={(e) => onCambiarFiltro(e.target.value)}
          >
            <option value="">Todas</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.nombre}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {gastosFiltrados.length === 0 ? (
          <p className="no-gastos">No hay gastos registrados en esta categoría.</p>
        ) : (
          <div className="gastos-list">
            {gastosFiltrados.map((gasto) => (
              <GastoItem
                key={gasto.id}
                gasto={gasto}
                onEliminar={onEliminarGasto}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GastoList;


