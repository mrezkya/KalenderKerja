const express = require('express');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const prisma = new PrismaClient();
app.use(express.urlencoded({ extended: true }));

async function main(nama, email, kelompok, password) {
  await prisma.user.create({
    data: {
      name: nama,
      email: email,
      kelompok: kelompok,
      Password: password
    },
  });
}

function bulan(y,m) {
    
  return (
    (15 +
      Math.floor((13 * (13 + 1)) / 5) +
      25 +
      Math.floor(25 / 4) +
      Math.floor(20 / 4) -
      2 * 20) %
    7
  );
}

t = new Date();
var year = t.getFullYear();
var month = t.getMonth();

var a = bulan(year, month);
a = parseInt(a) - 1;
console.log(a);
// Halaman Kalender
app.get('/', (req, res) => {
    res.render('index', {hari: 31, skip: a });
});

// Halaman buat ketua
app.get('/:nama/:email/:kelompok/:password', (req, res) => {
    var nama = req.params.nama;
    var email = req.params.email;
    var kelompok = req.params.kelompok;
    var password = req.params.password;
    res.render('index', {name: 'Panini'});
    main(nama, email, parseInt(kelompok), password);
    res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Berjalan di : http://localhost:${port}`);
});