/*
  Warnings:

  - A unique constraint covering the columns `[zapId]` on the table `Trigger` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_zapId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_zapId_key" ON "Trigger"("zapId");

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE CASCADE ON UPDATE CASCADE;
