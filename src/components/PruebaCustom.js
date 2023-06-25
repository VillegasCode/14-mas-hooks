import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebaCustom = () => {

    let nombre = ", Me llamo Carlos Villegas Chirinos";

    const {mayusculas, minusculas, concatenar} = useMayus("Soy el mejor programador del mundo");
    console.log(mayusculas());
    console.log(minusculas());
    console.log(concatenar(nombre));
    console.log(minusculas(nombre));
    console.log(mayusculas(nombre));

  return (
    <div>
        <h1>Probando Componentes Personalizados</h1>
    </div>
  )
}
