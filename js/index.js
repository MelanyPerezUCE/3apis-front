async function apisita () {
    var Solicitud = await fetch(`http://localhost:3001/api`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });
        
        var Respuesta_Servidor = await Solicitud.json();
        console.log(Respuesta_Servidor)

        document.getElementById("Nombre").innerText = "Nombre: "+Respuesta_Servidor.Respuesta.Nombre
        document.getElementById("Color_Piel").innerText = "Color de la Piel: "+Respuesta_Servidor.Respuesta.Color_Piel
        document.getElementById("Color_Ojos").innerText = "Color de Ojos: "+Respuesta_Servidor.Respuesta.Color_Ojos
        document.getElementById("Chiste").innerText = "Chiste: "+Respuesta_Servidor.Respuesta.Chiste
        document.getElementById("Imagen").src = Respuesta_Servidor.Respuesta.Imagen

}
        
apisita ()