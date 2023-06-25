import { useState } from "react";


export const useMayus = (texto) => {

    const [miTexto, setMiTexto] = useState(texto);

    const mayusculas = () => {
        setMiTexto(texto.toUpperCase());
    }

    const minusculas = () => {
        setMiTexto(texto.toLowerCase());
    }

    const concatenar = (agregado) => {
        setMiTexto(texto+agregado);
    }

    return {
        estado: miTexto,
        mayusculas,
        minusculas,
        concatenar
    };






    //Usando el (valor = "") como parámetro opcional
    // const mayusculas = (valor = "") => {
    //     return texto.toUpperCase() + valor.toUpperCase();
    // }

    // const minusculas = (valor = "") => {
    //     let txt1 = texto.toLowerCase();
    //     let txt2 = valor.toLowerCase();
    //     return txt1+txt2;
    // }

    // const concatenar = (agregado) => {
    //     return texto+agregado;
    // }

    // return {
    //     mayusculas,
    //     minusculas,
    //     concatenar
    // };
}