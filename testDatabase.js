const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

// var ok = null
// async function lihatData(id){
//     const user =  await prisma.user.findMany({
//         where: {
//             id: id
//         }
//     })
//     console.log(user[0].name);
//     ok = user
// }

// lihatData(1);

async function tambahKerjaan(id) {
    const panini = await prisma.user.findMany({
        where: {
            id: id
        }
    })
    console.log(panini[0].name);
    await prisma.pekerjaan.create({
        data: {
            j_pekerjaan: "Membuat Aplikasi",
            waktu: "01-01-2025",
            UserId: 1,
            p_jawab: `${ panini[0].name }`
        }
    })
}

tambahKerjaan(4);
// tambahKerjaan();
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// async function main() {
//   try {
//     const pekerjaan = await prisma.pekerjaan.findMany({
//       where: {
//         UserId: 1, // Filter pekerjaan untuk user dengan ID 1
//       },
//       include: {
//         user: true, // Sertakan data user terkait
//       },
//     });

//     if (pekerjaan.length > 0) {
//       pekerjaan.forEach((task) => {
//         // console.log(`Pekerjaan: ${task.j_pekerjaan}`);
//         // console.log(`Waktu: ${task.waktu}`);
//         // console.log(`Nama User: ${task.user.name}`); // Menampilkan nama user terkait
//         // console.log("---");
//         console.log(task.user.name);
//       });
//     } else {
//       console.log("Tidak ada pekerjaan untuk user dengan ID 1.");
//     }
//   } catch (error) {
//     console.error("Terjadi kesalahan:", error.message);
//   } finally {
//     await prisma.$disconnect(); // Tutup koneksi ke database
//   }
// }

// main();

//  async function lihatData(){
//     const user =  await prisma.user.findMany()
//     console.log(user);
//     return user
// }

// console.log(lihatData());