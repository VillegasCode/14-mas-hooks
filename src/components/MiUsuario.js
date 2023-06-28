import React, { useEffect, useState } from 'react'

export const MiUsuario = () => {
  
    const [usuario, setUsuario] = useState({
        datos: null,
        cargando: true
    });

    const getUsuario = async(url) => {
        setUsuario({
            ...usuario,
            cargando: true
        });
        
        const peticion = await fetch(url);
        const {data} = await peticion.json();

        console.log(data);
        setUsuario({
            datos: data,
            cargando: false
        });

    }
  
    const getId = e => {
        let id = parseInt(e.target.value);
        let url = "https://reqres.in/api/users/" + id;
        getUsuario(url);
    }
  

    useEffect(() => {
        getUsuario("https://reqres.in/api/users/1");
    }, [])

    return (
    <div>
        <h1>Mi Usuario:</h1>
        <p>Datos del usuario</p>
        <p>{ usuario.cargando ? "Cargando..." : ""}</p>
        <p>{usuario?.datos?.first_name} {usuario?.datos?.last_name}</p>
        <input type='number' name='id' onChange={getId} />
    </div>
  )
}
