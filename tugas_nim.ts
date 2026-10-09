// Soal 1: Pola Segitiga
const tinggiSegitiga = 4; // digit terakhir NIM 053532324

console.log("=== SOAL 1: Pola Segitiga ===");
for (let i = 1; i <= tinggiSegitiga; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += j + (j < i ? " " : "");
  }
  console.log(baris);
}

console.log("\n=== SOAL 2: Deret Aritmatika ===");
const start = 24; // 2 digit terakhir NIM
const beda = 4;   // digit ke-3 dari belakang (3) + 1

let deret = "";
for (let i = 0; i < 10; i++) {
  const nilai = start + i * beda;
  deret += nilai + (i < 9 ? ", " : "");
}
console.log(deret);

console.log("\n=== SOAL 3: Bilangan Prima ===");
const batasAkhir = 34; // 2 digit terakhir (24) + 10

function isPrima(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let prima = "";
for (let i = 2; i <= batasAkhir; i++) {
  if (isPrima(i)) {
    prima += i + ", ";
  }
}
console.log(prima.slice(0, -2)); // hapus koma terakhir
