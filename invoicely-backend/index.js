const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Habilitar CORS para permitir que Angular se conecte

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost', // Cambia esto si tu base de datos está en otro servidor
  user: 'root', // Usuario de MySQL
  password: '270792JiR92+', // Contraseña de MySQL
  database: 'invoicely' // Nombre de la base de datos
});

// Conexión a la base de datos
db.connect(err => {
    if (err) {
      console.error('Error de conexión:', err);
      return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener los datos de los clientes
app.get('/api/clientes', (req, res) => {
    const query = 'SELECT * FROM clientes';
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
});

// Ruta para obtener los datos de los clientes
app.get('/api/productos', (req, res) => {
  const query = 'SELECT * FROm productos'; 
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results); 
    }
  });
});
  
// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});