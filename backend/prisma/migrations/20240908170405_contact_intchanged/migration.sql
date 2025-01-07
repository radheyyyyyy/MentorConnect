/*
  Warnings:

  - Changed the type of `contact` on the `Mentors` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Mentors" DROP COLUMN "contact",
ADD COLUMN     "contact" INTEGER NOT NULL;
