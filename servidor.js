import express, {json} from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

//Permitimos la conceccion con el .env
dotenv.config();
const PORT = process.env.PORT;

//Iniciamos express
const app = express();

// Obtenemos la dirección de los elementos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Para que acepte json
app.use(json());


// Permite mostrar la página web segun la ruta
app.use(express.static(path.join(__dirname)));

// ---------------------- Login ------------------------------

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});

app.get("/api", async (req,res) =>{
    var Solicitud = await fetch(`http://ec2-44-201-176-196.compute-1.amazonaws.com:3000`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });

        var Respuesta_Servidor = await Solicitud.json();

        res.status(200).json({
            Estado: 200,
            Respuesta: Respuesta_Servidor.Respuesta
        });
});

app.listen(PORT, () => {
    console.log(`Servidor Activo http://localhost:${PORT}`);
});
