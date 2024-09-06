-- CreateTable
CREATE TABLE "Mentors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "skills" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "currentJob" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Mentors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentors_emailId_key" ON "Mentors"("emailId");

-- AddForeignKey
ALTER TABLE "Mentors" ADD CONSTRAINT "Mentors_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "verifiedUsers"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
