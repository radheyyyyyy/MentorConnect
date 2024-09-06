-- CreateTable
CREATE TABLE "verifiedUsers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL,

    CONSTRAINT "verifiedUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verifiedUsers_email_key" ON "verifiedUsers"("email");
