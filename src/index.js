const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post("/equipo", async (req, res) => {
  const {
    nombreEquipo,
    institucion,
    departamento,
    municipio,
    direccion,
    telefono,
  } = req.body;
  try {
    const result = await prisma.equipos.create({
      data: {
        nombreEquipo,
        institucion,
        departamento,
        municipio,
        direccion,
        telefono,
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong :(",
      error: error.message,
    });
  }
});

//mostrar todos los registros
app.get("/equipos", async (req, res) => {
  try {
    const teams = await prisma.equipos.findMany();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong :(",
      error: error.message,
    });
  }
});


// app.get("/jugador", async (req, res) => {
//   try {
//     const jugador = await prisma.jugadores.findMany();
//     res.status(200).json(jugador);
//   } catch (error) {
//     res.status(500).json({
//       message: "Something went wrong :(",
//       error: error.message,
//     });
//   }
// });

app.get("/jugador/buscar/:nombre", async (req, res) => {
  const { nombre } = req.params; // Obtiene el nombre del jugador desde los parámetros de ruta
  try {
    const jugadores = await prisma.jugadores.findMany({
      where: {
        nombres: {
          contains: nombre,
          mode: "insensitive", // Búsqueda insensible a mayúsculas/minúsculas
        },
      },
    });
    res.status(200).json(jugadores);
  } catch (error) {
    res.status(500).json({
      message: "Jugador no encontrado :(",
      error: error.message,
    });
  }
});

app.post("/jugador", async (req, res) => {
  const {
    nombres,
    apellidos,
    fechaNacimiento,
    genero,
    posicion,
    idEquipo,
  } = req.body;
  try {
    const result = await prisma.jugadores.create({
      data: {
        nombres,
        apellidos,
        fechaNacimiento,
        genero,
        posicion,
        idEquipo,
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong :(",
      error: error.message,
    });
  }
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`)
);
