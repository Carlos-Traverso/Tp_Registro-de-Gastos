import React from 'react';

const Resumen = ({ gastos }) => {
  // Calcular el Total gastado
  const totalGastado = gastos.reduce((acum, gasto) => acum + gasto.monto, 0);

  // Calcular el Gasto más alto
  const obtenerGastoMasAlto = () => {
    if (gastos.length === 0) return 0;
    const montos = gastos.map(g => g.monto);
    return Math.max(...montos);
  };

  const gastoMasAlto = obtenerGastoMasAlto();

  return (
    <div className="resumen-container">
      <h2>Resumen de Gastos</h2>
      <div className="resumen-grid">
        <div className="resumen-card total">
          <h3>Total Gastado</h3>
          <p className="resumen-valor">
            ${totalGastado.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="resumen-card max-gasto">
          <h3>Gasto Más Alto</h3>
          <p className="resumen-valor">
            ${gastoMasAlto.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resumen;


