export const useMayus = (texto) => {
    const mayusculas = (valor = "") => {
        return texto.toUpperCase() + valor.toUpperCase();
    }

    const minusculas = (valor = "") => {
        let txt1 = texto.toLowerCase();
        let txt2 = valor.toLowerCase();
        return txt1+txt2;
    }

    const concatenar = (agregado) => {
        return texto+agregado;
    }

    return {
        mayusculas,
        minusculas,
        concatenar
    };
}