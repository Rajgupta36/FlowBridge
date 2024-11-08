/*
  Warnings:

  - Added the required column `Metadata` to the `ZapRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ZapRun" ADD COLUMN     "Metadata" JSONB NOT NULL;
