/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Aluno" (
    "id_aluno" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_aluno" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "numero_grupo" INTEGER,
    CONSTRAINT "Aluno_numero_grupo_fkey" FOREIGN KEY ("numero_grupo") REFERENCES "Grupo" ("numero_grupo") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "id_professor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_professor" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Grupo" (
    "numero_grupo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_grupo" TEXT NOT NULL,
    "id_lider" INTEGER NOT NULL,
    "numero_estande" INTEGER NOT NULL,
    "dia_apresentacao" DATETIME NOT NULL,
    CONSTRAINT "Grupo_id_lider_fkey" FOREIGN KEY ("id_lider") REFERENCES "Aluno" ("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_numero_estande_fkey" FOREIGN KEY ("numero_estande") REFERENCES "Estande" ("numero_estande") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estande" (
    "numero_estande" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id_avaliador" INTEGER NOT NULL,
    "numero_grupo_avaliado" INTEGER NOT NULL,
    "numero_estande_grupo" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_numero_grupo_avaliado_fkey" FOREIGN KEY ("numero_grupo_avaliado") REFERENCES "Grupo" ("numero_grupo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_id_avaliador_fkey" FOREIGN KEY ("id_avaliador") REFERENCES "Aluno" ("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_id_avaliador_fkey" FOREIGN KEY ("id_avaliador") REFERENCES "Professor" ("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_matricula_key" ON "Professor"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_numero_grupo_key" ON "Grupo"("numero_grupo");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_id_lider_key" ON "Grupo"("id_lider");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_numero_estande_key" ON "Grupo"("numero_estande");

-- CreateIndex
CREATE UNIQUE INDEX "Estande_numero_estande_key" ON "Estande"("numero_estande");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_numero_estande_grupo_key" ON "Avaliacao"("numero_estande_grupo");
