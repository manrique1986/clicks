const express = require('express');
const mongoose = require('mongoose');
const clickRoutes = require('./routes/clickRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_CNN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
   
})
.then(() => {
  console.log('Conexión exitosa a la base de datos');
})
.catch(err => {
  console.error('Error al conectar a la base de datos:', err);
  process.exit(1); // Salir de la aplicación si la conexión falla
});

// Middleware para parsear JSON
app.use(express.json());

// Configurar rutas
app.use('/api/click', clickRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
