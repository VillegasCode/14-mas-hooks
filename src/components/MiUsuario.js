import React, { useState } from 'react'
import { useAjax } from '../hooks/useAjax'

export const MiUsuario = () => {

    const [url, setUrl] = useState("https://reqres.in/api/users/1");
    const {datos, cargando} = useAjax(url);

    const getId = e => {
        let id = parseInt(e.target.value);
        setUrl("https://reqres.in/api/users/" + id);
    }

    //Esto que está comentado se pasó a un hook aparte llamado useAjax.js
    // const getId = e => {
    //     let id = parseInt(e.target.value);
    //     let url = "https://reqres.in/api/users/" + id;
    //     getUsuario(url);
    // }
    
    // const [usuario, setUsuario] = useState({
    //     datos: null,
    //     cargando: true
    // });

    // const getUsuario = async(url) => {
    //     setUsuario({
    //         ...usuario,
    //         cargando: true
    //     });
        
    //     const peticion = await fetch(url);
    //     const {data} = await peticion.json();

    //     console.log(data);
    //     setUsuario({
    //         datos: data,
    //         cargando: false
    //     });

    // }  

    // useEffect(() => {
    //     getUsuario("https://reqres.in/api/users/1");
    // }, [])

    return (

        <div>
        <h1>Mi Usuario:</h1>
        <p>Datos del usuario</p>
        <p>{ cargando ? "Cargando..." : ""}</p>
        <p>{ datos?.first_name} {datos?.last_name}</p>
        <input type='number' name='id' onChange={getId} />
    </div>


    // <div>
    //     <h1>Mi Usuario:</h1>
    //     <p>Datos del usuario</p>
    //     <p>{ usuario.cargando ? "Cargando..." : ""}</p>
    //     <p>{usuario?.datos?.first_name} {usuario?.datos?.last_name}</p>
    //     <input type='number' name='id' onChange={getId} />
    // </div>
  )
}
