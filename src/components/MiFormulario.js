import React from 'react'

export const MiFormulario = () => {
  return (
    <div>
        <h1>FORMULARIO</h1>
        <p>Formulario para guardar curso</p>
        <p>Curso guardado:</p>

        <form className='mi-formulario'>
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
