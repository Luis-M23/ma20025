/*
  Warnings:

  - Changed the type of `fechaNacimiento` on the `jugadores` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "jugadores" DROP COLUMN "fechaNacimiento",
ADD COLUMN     "fechaNacimiento" VARCHAR(20) NOT NULL;
