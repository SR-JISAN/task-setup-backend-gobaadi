-- DropIndex
DROP INDEX "users_name_role_idx";

-- CreateTable
CREATE TABLE "userProfiles" (
    "id" TEXT NOT NULL,
    "bio" TEXT,
    "address" TEXT,
    "contactNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "userProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userProfiles_userId_key" ON "userProfiles"("userId");

-- CreateIndex
CREATE INDEX "userProfiles_userId_createdAt_idx" ON "userProfiles"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "users_name_role_createdAt_idx" ON "users"("name", "role", "createdAt");

-- AddForeignKey
ALTER TABLE "userProfiles" ADD CONSTRAINT "userProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
