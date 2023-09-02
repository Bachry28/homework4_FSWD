let nilairandom = [];
for (let i = 1; i <= 100; i++) {
  let nilai = Math.floor(Math.random()*50 ) +1 ;
  nilairandom.push(nilai);
}


const angkaGenap = []
const angkaGanjil = []
for(let i=0; i < nilairandom.length; i++){
  if(i % 2 === 0){
    angkaGenap.push(nilairandom[i])
  }
  else{
    angkaGanjil.push(nilairandom[i])
  }
}
function minimal(arr) {
  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }

  return minValue;
}

function maksimal(arr) {
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}
function total(arr){
  let nilai = 0;
  for(i = 0; i<arr.length; i++){
      nilai += arr[i]
  }

  return nilai
}

function rataRata(arr){
  let nilai = 0;
  for(i = 0; i<arr.length; i++){
      nilai += arr[i]
  }

  return total(arr) /arr.length
}

console.log("angka random:", nilairandom);
console.log("angka genap:", angkaGenap);
console.log("angka maksimal di index genap:", maksimal(angkaGenap));
console.log("angka minimal di index genap:", minimal(angkaGenap));
console.log("total angka di index genap:", total(angkaGenap));
console.log("rata rata angka di index genap:", rataRata(angkaGenap));

console.log("angka ganjil:", angkaGanjil);
console.log("angka maksimal di index ganjil:", maksimal(angkaGanjil));
console.log("angka minimal di index ganjil:", minimal(angkaGanjil));
console.log("total angka di index ganjil:", total(angkaGanjil));
console.log("rata rata angka di index ganjil:", rataRata(angkaGanjil));