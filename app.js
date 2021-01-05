const storage = window.localStorage;
let array = ["number", "18", "materiel", "Material", "color", "Black"]
let resultat = document.getElementById("result");

for(let x = 0; x < array.length; x+=2) {
    storage.setItem(array[x], array[x + 1]);
}

function result() {
    resultat.innerHTML = "Thème " + storage.getItem("color") + ", type " + storage.getItem("materiel") + " et police de caractère: " + storage.getItem("number");
}

console.log(result());

array.splice(1,1, "16");
array.splice(3,1, "Windows");
array.splice(5,1, "White");

storage.clear();

for(let x = 0; x < array.length; x+=2) {
    storage.setItem(array[x], array[x + 1]);
}

result();