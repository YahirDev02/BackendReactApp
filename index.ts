//Agregamos las librerías, esta forma también se les conoce como 
//EcmaScript ó ES modules | import express from "express"
//CommonJS | const express = require("express")
const express = require("express")
import router from "./src/routes";

const app = express();

//Le paso mi app porque es el servidor
router(app);

app.listen(
    9000,
    //Calbalk
    function() {
        console.log("Puerto en escuchando...")
    }
)