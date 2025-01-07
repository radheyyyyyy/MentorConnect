/*
  Warnings:

  - Added the required column `Bio` to the `Mentors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mentors" ADD COLUMN     "Bio" TEXT NOT NULL;
