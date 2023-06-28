import React, {useState} from 'react'

export const MiUsuario = () => {
  
    const [usuario, setUsuario] = useState({
        datos: null
    });

    const getUsuario = async(url) => {
        const peticion = await fetch(url);
        const {data} = await peticion.json();

        console.log(data);
        setUsuario({
            datos: data
        });

    }
  
    const getId = e => {
        let id = parseInt(e.target.value);
        let url = "https://reqres.in/api/users/" + id;
        getUsuario(url);
    }
  
    return (
    <div>
        <h1>Mi Usuario:</h1>
        <p>Datos del usuario</p>
        <p>{usuario?.datos?.first_name}</p>
        <input type='number' name='id' onChange={getId} />
    </div>
  )
}
