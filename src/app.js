/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
    //write your code here

    document.querySelector("#btn").addEventListener("click", () => {
        document.querySelector("#the-excuse").innerHTML = generateExcuse();
    });
};

let generateExcuse = () => {
    let pronombre = ["A", "The"];
    let sujeto = ["jogger", "racoon", "driver", "dog", "comedian", "pinecone"];
    let acciones = ["took", "threw", "yellew at", "stole", "bit"];
    let posesiones = ["my homework", "my toe", "my car", "my shoe"];
    let donde = ["on the street", "in my house", "in my driveway"];

    let pronIndx = Math.floor(Math.random() * pronombre.length);
    let sujIndx = Math.floor(Math.random() * sujeto.length);
    let accIndx = Math.floor(Math.random() * acciones.length);
    let posesIndx = Math.floor(Math.random() * posesiones.length);
    let dondeIndx = Math.floor(Math.random() * donde.length);

    return (
        pronombre[pronIndx] +
        " " +
        sujeto[sujIndx] +
        " " +
        acciones[accIndx] +
        " " +
        posesiones[posesIndx] +
        " " +
        donde[dondeIndx] +
        " "
    );
};
//