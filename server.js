/**
 * Servidor HTTP Base para la simulación de respuestas JSON
 * Proyecto Formativo: ADSO - Control de Procesos
 */

const http = require('http');

// Definición de puerto
const PORT = 3000;

// Datos simulados (Entidad: Usuarios / Productos)
const usuariosSimulados = [
  { id: 1, nombre: "Ana Gómez", rol: "Administrador", estado: "Activo" },
  { id: 2, nombre: "Carlos Pérez", rol: "Cliente", estado: "Inactivo" }
];

// Creación del servidor HTTP
const server = http.createServer((req, res) => {
  // Configuración de encabezados HTTP (Headers) para enviar datos JSON
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Habilita CORS

  if (req.url === '/api/usuarios' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      ok: true,
      mensaje: "Lista de usuarios obtenida exitosamente",
      data: usuariosSimulados
    }));
  } else if (req.url === '/api/estado' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      ok: true,
      servicio: "Backend ADSO Server",
      estado: "En línea",
      timestamp: new Date()
    }));
  } else {
    // Manejo de rutas no encontradas (404)
    res.writeHead(404);
    res.end(JSON.stringify({
      ok: false,
      error: "Recurso no encontrado (404)"
    }));
  }
});

// Inicializar el servidor
server.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📌 Ruta de prueba 1: http://localhost:${PORT}/api/usuarios`);
  console.log(`📌 Ruta de prueba 2: http://localhost:${PORT}/api/estado`);
  console.log(`=================================`);
});


