/*
  Warnings:

  - Added the required column `UserId` to the `Pekerjaan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waktu` to the `Pekerjaan` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pekerjaan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "j_pekerjaan" TEXT NOT NULL,
    "waktu" TEXT NOT NULL,
    "UserId" INTEGER NOT NULL,
    CONSTRAINT "Pekerjaan_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pekerjaan" ("id", "j_pekerjaan") SELECT "id", "j_pekerjaan" FROM "Pekerjaan";
DROP TABLE "Pekerjaan";
ALTER TABLE "new_Pekerjaan" RENAME TO "Pekerjaan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;