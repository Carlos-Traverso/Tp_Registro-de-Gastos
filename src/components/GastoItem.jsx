import React from 'react';

const GastoItem = ({ gasto, onEliminar }) => {
  const { id, descripcion, monto, categoria, fecha } = gasto;

  // Formatear fecha para mostrar de forma legible (DD/MM/AAAA)
  const formatearFecha = (fechaStr) => {
    if (!fechaStr) return '';
    const parts = fechaStr.split('-');
    if (parts.length !== 3) return fechaStr;
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="gasto-item">
      <div className="gasto-item-info">
        <h4 className="gasto-descripcion">{descripcion}</h4>
        <div className="gasto-detalles">
          <span className="badge-categoria">{categoria}</span>
          <span className="gasto-fecha">{formatearFecha(fecha)}</span>
        </div>
      </div>
      <div className="gasto-item-actions">
        <span className="gasto-monto">${Number(monto).toLocaleString('es-AR', { minimumFractionDigits: 2 })}</span>
        <button className="btn-delete" onClick={() => onEliminar(id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default GastoItem;


