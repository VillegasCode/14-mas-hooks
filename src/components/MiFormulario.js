import React, { useState } from 'react'

export const MiFormulario = () => {

  const [formulario, setFormulario] = useState({});

  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario);

    const objetoCompleto = {};

    for(let [name, value] of formData){
      objetoCompleto[name] = value;
    }

    return objetoCompleto;
  }

  const enviado = (e) =>{
      e.preventDefault();
      
      // Esto fue reemplazado por serializarfORMULARIO
      // let curso = {
      //   titulo: e.target.titulo.value,
      //   anio: e.target.anio.value,
      //   descripcion: e.target.descripcion.value,
      //   autor: e.target.autor.value,
      //   email: e.target.email.value,
      // }

      // setFormulario(curso);

      let curso = serializarFormulario(e.target);

      setFormulario(curso);
  }

  return (
    <div>
        <h1>FORMULARIO</h1>
        <p>Formulario para guardar curso</p>
        <p>Curso guardado:</p>
        <pre>{JSON.stringify(formulario)}</pre>

        <form onSubmit={enviado} className='mi-formulario'>
            <input type='text' name='titulo' placeholder='Título:' />
            <input type='number' name='anio' placeholder='Año publicación:' />
            <textarea name='descripcion' placeholder='Descripción:' />
            <input type='text' name='autor' placeholder='Autor:' />
            <input type='email' name='email' placeholder='Correo de contacto:' />

            <input type='submit' value="Enviar" />
        </form>
    </div>
  )
}
