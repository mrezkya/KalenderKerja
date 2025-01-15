/*
  Warnings:

  - Added the required column `p_jawab` to the `Pekerjaan` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pekerjaan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "j_pekerjaan" TEXT NOT NULL,
    "waktu" TEXT NOT NULL,
    "UserId" INTEGER NOT NULL,
    "p_jawab" TEXT NOT NULL,
    CONSTRAINT "Pekerjaan_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pekerjaan" ("UserId", "id", "j_pekerjaan", "waktu") SELECT "UserId", "id", "j_pekerjaan", "waktu" FROM "Pekerjaan";
DROP TABLE "Pekerjaan";
ALTER TABLE "new_Pekerjaan" RENAME TO "Pekerjaan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
