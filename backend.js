// function ekstrakTanggal(tanggal) {
//     const bulan =["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
//     console.log(tanggal.split("-")[2]);
//     switch (tanggal.split("-")[1]) {
//         case "01":
//             if(tanggal.split("-")[2] == "2025"){
//                 console.log("Ada agenda");
//             }
//             console.log(bulan[0]);
//             break;
    
//         default:
//             break;
//     }

// }

// ekstrakTanggal("01-01-2025");

function bulan(){
    // console.log(13*(9+1)/5)
    // console.log()
    // 15 + 25 + 25 + 25 +20 - 2 * 20 %7
return (15 + Math.floor((13 * (13 + 1)) / 5) + 24 + Math.floor(24 / 4) +  Math.floor(20 / 4) -    2 * 20) % 7

}
// var a = bulan()
// a = parseInt(a) - 1
// console.log(a);

// var d = new Date
// var c = d.getFullYear()
// var e = c.toString()
// var f = e.split("")

// var g = e[0] + e[1]
// console.log(parseInt(g))

function ambilF(){
    let d = new Date
    let c = d.getFullYear()
    let e = c.toString()
    let f = e.split("")
    let g = e[0] + e[1]
    return parseInt(g)
}

function ambilE(){
    var d = new Date
    var c = d.getFullYear()
    var e = c.toString()
    var f = e.split("")
    var g = e[2] + e[3]
    return parseInt(g)
}
console.log(ambilF()) 
console.log(ambilE())