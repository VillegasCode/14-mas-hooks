import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebaCustom = () => {

    const {estado, mayusculas, minusculas, concatenar} = useMayus("Soy el mejor programador del mundo");

    let nombre = ", Me llamo Carlos Villegas Chirinos";

    // console.log(mayusculas());
    // console.log(minusculas());
    // console.log(concatenar(nombre));
    // console.log(minusculas(nombre));
    // console.log(mayusculas(nombre));

  return (
    <div>
        <h1>Probando Componentes Personalizados</h1>
            <h2>{estado}</h2>

            <p><button onClick={ mayusculas }>Poner en MAYÚSCULAS</button></p>
            <p><button onClick={ minusculas }>Poner en minúsculas</button></p>
            <p><button onClick={ e => concatenar(nombre) }>Concatenar textos</button></p>

    </div>
  )
}
