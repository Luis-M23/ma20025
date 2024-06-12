-- CreateTable
CREATE TABLE "equipos" (
    "idEquipo" SERIAL NOT NULL,
    "nombreEquipo" VARCHAR(255) NOT NULL,
    "institucion" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "equipos_pkey" PRIMARY KEY ("idEquipo")
);

-- CreateTable
CREATE TABLE "jugadores" (
    "idJugador" SERIAL NOT NULL,
    "nombres" VARCHAR(30) NOT NULL,
    "apellidos" VARCHAR(30) NOT NULL,
    "fechaNacimiento" VARCHAR(20) NOT NULL,
    "genero" CHAR(1) NOT NULL,
    "posicion" VARCHAR(30) NOT NULL,
    "idEquipo" INTEGER NOT NULL,

    CONSTRAINT "jugadores_pkey" PRIMARY KEY ("idJugador")
);

-- AddForeignKey
ALTER TABLE "jugadores" ADD CONSTRAINT "jugadores_idEquipo_fkey" FOREIGN KEY ("idEquipo") REFERENCES "equipos"("idEquipo") ON DELETE RESTRICT ON UPDATE CASCADE;
