import React, { useId } from 'react'

export const MiComponente = () => {

    // El hook useId sirve para tener un ID único e irrepetible
    const id = useId();
    const segundo_id = useId();
    const tercer_id = useId();
    
    console.log(id + " " + segundo_id + " " + tercer_id);
  
   return (
    <div>
        <h1>Hook useID</h1>
        <input id={id} name="nombre" placeholder="Nombre" />
    </div>
  )
}
