"use client"
import React from "react";
import style from "./foto.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";    
function Foto({url}){
    
    const [name,setName]=useState("esperando");
    const [pokemon,setPokemon]=useState("./vercel.svg");
    const[id,setId]=useState(0);

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setName(data.name);
            setPokemon(data.sprites.front_default);
            setId(data.id);
        })

    }, [])
    return(
        <div className={style["img-container"]}>
            <h2>My Pokemon</h2>
            <h1>{name}</h1>
            <div className={style["img"]}>
                <p className={style["numero"]}>#{id}</p>                    
                <Image src={pokemon} width={325} height={325} alt="pokemon"/>
            </div>
            
        </div>

    );
}
export default Foto;