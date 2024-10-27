// Objeto que asigna un regalo específico a cada invitado
const regalos = {
    "invitado1": "kit Bodies 0-3 meses",
    "invitado2": "Ajuar recien nacido",
    "invitado3": "Fular para bebe y esqueletos (0-3 meses)",
    "invitado4": "Semanario 6 a 9 meses",
    "invitado5": "Set de pantalones y bodies de (6 a 9 meses)",
    "invitado6": "pañalera tipo morral",
    "invitado7": "Sabanas de bebe para corral",
    "invitado8": "Sleeping para bebe 0 a 3 meses y toallitas humedas winny",
    "invitado9": "Semanario 0 a 3 meses",
    "invitado10": "Mecedora",
    "invitado11": "Set de pijamas (0 a 3 meses)",
    "invitado12": "Set de mamelucos y gorritos de 0 a 3 meses y zapatillas puma one peace jajajaja",
    "invitado13": "kit pijama Mamá,Bebé y pantuflas",
    "invitado14": "Kit de aseo recien nacido (peinilla, lima electrica, apirador nasal, entre otros)",
    "invitado15": "Cobija termica o de Algodón ",
    "invitado16": "Gimnasio para bebé",
    "invitado17": "Set de conjuntos con pantalon de 0 a 3 meses",
    "invitado18": "Esterilizador de teteros",
    "invitado19": "Set de baberos y set de toallitas para babitas",
    "invitado20": "Bañera plegable",
    "invitado21": "Kit de baño (champoo,jabon liquido, crema para la piel y crema anti pañalitis)",
    "invitado22": "Cambiador plastico y paquete de medias",
    "invitado23": "toalla para baño y kit de esqueletos de 6 a 9 meses",
    "invitado24": "Set mi primera muda",
    "invitado25": "Paca de pañales ETAPA 1 Huggies y toallitas humedas",
    "invitado26": "Cojin de lactancia",
    "invitado27": "Almohada de maternidad",
    "invitado28": "Nido para bebé ",
    "invitado29": "Colchoneta antireflujo para bebé",
    "invitado30": "kit maletero de pañales recien nacido",
    "invitado31": "Corral",
    "invitado32": "Kit de biberones",
    "invitado33": "Cobijas y mantas suaves",
    "invitado34": "Estractor de leche",
    
    // Agrega aquí los regalos específicos para cada invitado
    //"invitado60": "Productos de cuidado del bebé"
};

function mostrarRegalo() {
    const invitadoSeleccionado = document.getElementById("invitadoSelect").value;
    if (invitadoSeleccionado === "") {
        alert("Por favor, selecciona tu nombre.");
        return;
    }
    const regaloAsignado = regalos[invitadoSeleccionado];
    document.getElementById("regalo").textContent = regaloAsignado || "Regalo no asignado";
    document.querySelector(".invitation").classList.add("hidden");
    document.getElementById("gift").classList.remove("hidden");
}

function volver() {
    document.querySelector(".invitation").classList.remove("hidden");
    document.getElementById("gift").classList.add("hidden");
    document.getElementById("invitadoSelect").value = "";
}