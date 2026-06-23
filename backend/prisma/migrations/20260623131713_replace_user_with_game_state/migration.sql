/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "GameState" (
    "id" SERIAL NOT NULL,
    "totalScore" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "GameState_pkey" PRIMARY KEY ("id")
);
