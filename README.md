# TP React - Registro de Gastos

## Resumen
Para este trabajo practico de Desarrollo de aplicaciones Web Full Stack se realizo una aplicacion de un sistema que permite el control de gastos personales utilizando "Json-Server".

## Las Funcionalidades que se ven en este proyecto
- **Alta de Gastos**: Formulario controlado que permite registrar descripción, monto, fecha y categoría del gasto.
- **Visualización y Filtrado**: Listado completo de los gastos con la posibilidad de filtrar dinámicamente por categoría en tiempo real.
- **Baja de Gastos**: Botón individual por gasto que permite eliminarlo de la interfaz y del servidor.
- **Resumen e Indicadores**: Cálculo en tiempo de ejecución del gasto total acumulado y del gasto más costoso del listado actual.

## Conceptos de React Utilizados
1. **Componentes Funcionales**: Modularización de la interfaz en componentes de UI atómicos (`GastoForm`, `GastoList`, `GastoItem` y `Resumen`).
2. **Hook `useState`**: Control del estado local dentro del formulario y almacenamiento centralizado de gastos, categorías y filtros en el componente de nivel superior `App.jsx`.
3. **Hook `useEffect`**: Sincronización asincrónica para obtener los datos persistidos en el servidor (`json-server`) durante el montaje inicial del componente.
4. **Pasaje de Props**: Envío unidireccional de datos de estado y funciones callbacks manejadoras (`event handlers`) desde el componente padre hacia los componentes secundarios.
5. **Inmutabilidad del Estado**: Actualización del estado global de React sin mutar las referencias originales de los arreglos, utilizando el operador spread (`[...]`) y el método `.filter()`.
6. **Módulo de Servicios Aislado**: Encapsulamiento de las peticiones HTTP a la API REST (GET, POST, DELETE) en un módulo independiente (`src/services/gastos.js`) utilizando la librería Axios.

---

## Instrucciones de Ejecución (Ya con ayuda de Chatgpt)

### 1. Instalación de Dependencias
Instale las librerías necesarias del proyecto (incluido Axios para las peticiones HTTP):
```bash
npm install
npm install axios
```

### 2. Levantar el Servidor Simulado (Backend)
Inicie `json-server` apuntando al archivo de datos de configuración local en el puerto `3001`:
```bash
npx json-server --watch backend/db.json --port 3001
```

### 3. Iniciar la Aplicación React (Frontend)
En una nueva pestaña de la terminal, ejecute el servidor de desarrollo local (Vite/React):
```bash
npm run dev
```

---

