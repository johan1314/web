// Simulación de un motor de base de datos como 
const baseDeDatos = [
  { username: 'admin', password: '1234' },
  { username: 'naya', password: 'tutialacoja' },
  { username: 'maria becerra', password: 'abc123' }
];

// Elementos del DOM
const formulario = document.getElementById('formularioSQL');
const usuarioInput = document.getElementById('usuario');
const contrasenaInput = document.getElementById('contrasena');
const resultadoSQL = document.getElementById('resultadoSQL');
const mensajeError = document.getElementById('mensajeError');

// escuchamos el envío del formulario 
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // esto evitara que se envie el formulario

  const usuario = usuarioInput.value.trim();
  const contrasena = contrasenaInput.value.trim();

  // vilidación de campos
  if (!usuario || !contrasena) {
    mostrarError('Todos los campos son obligatorios.');
    return;
  }

  // Generamos una simulación de consulta SQL 
  const consulta = generarConsultaSQL(usuario, contrasena);
  mostrarConsulta(consulta);

  // simulamos validación en la "base de datos"
  const acceso = validarCredenciales(usuario, contrasena);
  mostrarResultado(acceso);
});

// función para generar la consulta SQL simulada 
function generarConsultaSQL(user, pass) {
  return `SELECT * FROM users WHERE username = '${user}' AND password = '${pass}'`;
}

// función para validar contra la "base de datos" de mentiritis 
function validarCredenciales(user, pass) {
  return baseDeDatos.some(
    u => u.username === user && u.password === pass
  );
}

// Funciones auxiliares (criterio 2.1.4)
function mostrarConsulta(consulta) {
  resultadoSQL.innerText = "Consulta simulada:\n" + consulta;
  resultadoSQL.style.color = 'black';
}

function mostrarResultado(acceso) {
  resultadoSQL.innerText += "\nResultado:\n" +
    (acceso ? "✅ acceso concedido" : "❌ acceso denegado");
  resultadoSQL.style.color = acceso ? 'green' : 'red';
}

function mostrarError(mensaje) {
  mensajeError.innerText = mensaje;
  resultadoSQL.innerText = '';
  resultadoSQL.style.color = 'black';
}
