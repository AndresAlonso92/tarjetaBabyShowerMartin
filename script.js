// Objeto que asigna un regalo específico a cada invitado
const regalos = {
    "invitado1": "kit Bodies 0-3 meses",
    "invitado2": "Saco para dormir y kit pañalero recien nacido",
    "invitado3": "Fular para bebe y esqueletos (0-3 meses)",
    "invitado4": "Set de pijamas 6 a 9 meses",
    "invitado5": "Brasieles de lactancia",
    "invitado6": "pañalera tipo morral",
    "invitado7": "Lenceria para el corral del bebé",
    "invitado8": "Semanario 6 a 9 meses",
    "invitado9": "Semanario 0 a 3 meses",
    "invitado10": "Almohada materna",
    "invitado11": "Mecedora",
    "invitado12": "Set de pijamas (0 a 3 meses)",
    "invitado13": "Set de mamelucos y gorritos de 0 a 3 meses y zapatillas puma one peace jajajaja",
    "invitado14": "kit pijama Mamá,Bebé, pantuflas y set de muselinas",
    "invitado15": "Kit de aseo recien nacido (termometro, lima electrica, aspirador nasal, entre otros)",
    "invitado16": "Cobija termica o de Algodón ",
    "invitado17": "Gimnasio para bebé",
    "invitado18": "Set de conjuntos con pantalon de 0 a 3 meses y set de gorritos",
    "invitado19": "Tapete de juego para bebé y paquete de toallitas",
    "invitado20": "Esterilizador de teteros",
    "invitado21": "Set de baberos y set de toallitas para babitas",
    "invitado22": "Bañera plegable",
    "invitado23": "Kit de baño (champoo,jabon liquido, crema para la piel y crema anti pañalitis)",
    "invitado24": "Cambiador plastico y paquete de medias",
    "invitado25": "toalla para baño y kit de esqueletos de 6 a 9 meses",
    "invitado26": "Set mi primera muda",
    "invitado27": "Paca de pañales ETAPA 1 Huggies y toallitas humedas",
    "invitado28": "Cojin de lactancia",
    "invitado29": "Set de pantalones y bodies 6 a 9 meses",
    "invitado30": "Nido para bebé ",
    "invitado31": "Mudador anatómico",
    "invitado32": "paca de pañales huggies etapa 1 y pañitos humedos",
    "invitado33": "Set mi primera muda",
    "invitado34": "Corral",
    "invitado35": "Kit de biberones anticólico",
    "invitado36": "Cobijas y mantas suaves",
    "invitado37": "Estractor de leche",
    
    
    
    
    
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