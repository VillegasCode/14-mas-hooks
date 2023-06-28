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

  const cambiado = ({target}) => {
    const {name, value} = target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  return (
    <div>
        <h1>FORMULARIO</h1>
        <p>Formulario para guardar curso</p>
        <p>Curso guardado: {formulario.titulo}</p>
        <pre className='codigo'>{JSON.stringify(formulario)}</pre>

        <form onSubmit={enviado} className='mi-formulario'>
            <input type='text' name='titulo' onChange={cambiado} placeholder='Título:' />
            <input type='number' name='anio' onChange={cambiado} placeholder='Año publicación:' />
            <textarea name='descripcion' onChange={cambiado} placeholder='Descripción:' />
            <input type='text' name='autor' onChange={cambiado} placeholder='Autor:' />
            <input type='email' name='email' onChange={cambiado} placeholder='Correo de contacto:' />

            <input type='submit' value="Enviar" />
        </form>
    </div>
  )
}
