const body = document.body;
const constBotonModo = document.getElementById("BotonModo");

// Aqui ocurre la magia
constBotonModo.addEventListener("click", () => {body.classList.toggle("dark-mode");

// Verifica si el modo oscuro está activado
const isDarkMode = body.classList.contains("dark-mode");
  
// Actualiza el texto del botón y el emoji en función del modo
if (isDarkMode) {constBotonModo.textContent = "🍔";} else {constBotonModo.textContent = "🍕";}});


function enviar() 
    {
    var comentario = document.getElementById("comentario").value;

    if (comentario === "") {
        return;
      }
     alert("hamburguesa>>>pizza");
      document.getElementById("comentario").value = "";
    }	
