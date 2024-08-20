
class CentroReciclaje {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


class MaterialReciclaje {
    constructor(nombre, centroReciclajeNombre) {
        this.nombre = nombre;
        this.centroReciclaje = new CentroReciclaje(centroReciclajeNombre);
    }
}



let agregarButton = document.getElementById("agregarButton");
let mostrarButton = document.getElementById("mostrarButton");
let detalles = document.getElementById("detalles");


agregarButton.addEventListener("click", () => { 
    let materialNombre = document.getElementById("materialNombre").value;
    let centroNombre = document.getElementById("Centronombre").value;

    if (materialNombre !== "" && centroNombre !== "") {
       
        MaterialReciclaje = new MaterialReciclaje(materialNombre, centroNombre);

  
        alert("Material reciclaje agregado");
    } else {
        alert("Complete ambos campos.");
    }
});


mostrarButton.addEventListener("click", () => {
    if (MaterialReciclaje) {
        detalles.innerHTML = `Material: ${MaterialReciclaje.nombre}, Centro de reciclaje: ${MaterialReciclaje.centroReciclaje.nombre}`;
    } else {
        detalles.innerHTML = "No se ha agregado ningún material reciclable.";
    }
});
