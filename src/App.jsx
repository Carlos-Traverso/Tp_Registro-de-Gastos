import { useState, useEffect } from 'react';
import GastoForm from './components/GastoForm';
import GastoList from './components/GastoList';
import Resumen from './components/Resumen';
import gastosService from './services/gastos';

function App() {
  // Inicialización de estados
  const [gastos, setGastos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Carga inicial de datos
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setCargando(true);
        const [listaGastos, listaCategorias] = await Promise.all([
          gastosService.getAllGastos(),
          gastosService.getAllCategorias()
        ]);
        setGastos(listaGastos);
        setCategorias(listaCategorias);
        setError(null);
      } catch (err) {
        console.error('Error al cargar datos iniciales:', err);
        setError('Error: No se pudo conectar con el servidor. Por favor, verifique que json-server esté corriendo.');
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // Agregar un gasto
  const handleAgregarGasto = async (nuevoGasto) => {
    try {
      const gastoCreado = await gastosService.createGasto(nuevoGasto);
      setGastos([...gastos, gastoCreado]);
    } catch (error) {
      console.error('Error al agregar gasto:', error);
    }
  };

  // Eliminar un gasto
  const handleEliminarGasto = async (id) => {
    try {
      await gastosService.deleteGasto(id);
      const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
      setGastos(gastosActualizados);
    } catch (error) {
      console.error('Error al eliminar gasto:', error);
    }
  };

  // Renderizado condicional
  if (error) {
    return (
      <div className="app-container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <div className="error-banner">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (cargando) {
    return (
      <div className="app-container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <div className="loading">Cargando datos del servidor...</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Registro de Gastos</h1>
        <p className="app-subtitle">Trabajo Práctico - UTN</p>
      </header>
      
      <main className="app-main">
        <div className="app-grid">
          <div className="left-panel">
            <GastoForm 
              categorias={categorias} 
              onAgregarGasto={handleAgregarGasto} 
            />
            <Resumen 
              gastos={categoriaSeleccionada ? gastos.filter(g => g.categoria === categoriaSeleccionada) : gastos} 
            />
          </div>

          <div className="right-panel">
            <GastoList 
              gastos={gastos} 
              categorias={categorias} 
              categoriaSeleccionada={categoriaSeleccionada}
              onCambiarFiltro={setCategoriaSeleccionada}
              onEliminarGasto={handleEliminarGasto}
            />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} - UTN Facultad Regional</p>
      </footer>
    </div>
  );
}

export default App;



