"use client"
import React from "react";
import style from './text.module.css'
import { useState, useEffect } from "react";
function Text({url}){
    
      
    const [type, setType]=useState([])
    const[altura,setAltura]=useState("esperando");
    const[weight,setWeight]=useState("esperando");
    const[habilidad,setHabilidad]=useState([]);
    const[stat,setStat]=useState([]);
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            if(data.types&&data.types.length>0){
                const tipos=data.types.map(type=>type.type.name);
                setType(tipos)
            };
            setAltura(data.height);
            setWeight(data.weight);
            if(data.abilities&&data.abilities.length>0){
                const habilidades=data.abilities.map(ability=>ability.ability.name);
                setHabilidad(habilidades);
            };
            if(data.stats&&data.stats.length>0){
                const estadisticas= data.stats.map(stat=>{
                    return{
                        nombre: stat.stat.name ,
                        base: stat.base_stat
                    };
                } );
                setStat(estadisticas);
            }
            
        })

    },[]);



    return(
        <div>
            <h1 className={style["title"]}>About</h1>
            <div className={style["text-container"]}>
            
                <div className={style["box-letas-claras"]}>
                    <p className={style["p-claras"]}>Type</p>
                    <p className={style["p-claras"]}>Height</p>
                    <p className={style["p-claras"]}>Weight</p>
                    <p className={style["p-claras"]}>Abilities</p>

                </div>
                <div className={style["box-letras-oscuras"]}>
                    <p className={style["p-oscuras"]}>{type} </p>
                    <p className={style["p-oscuras"]}>{altura/10} m</p>
                    <p className={style["p-oscuras"]}>{weight/10} kg</p>
                    <p className={style["p-oscuras"]}>
                        {habilidad.map((habilid, index) => (
                                <p key={index}>{habilid}</p>
                            ))}
                    </p>
                </div>        
            </div>
            <h1 className={style["title"]}>Stats</h1>
            <div className={style["text-container"]}>
            
                <div className={style["box-letas-claras"]}>                            
                    <p >{
                        stat.map((x,index)=>(
                            <p className={style["p-claras"]} key={index}>{x.nombre}</p>
                        ))

                    }</p>
                    

                </div>
                <div className={style["box-letras-oscuras"]}>
                    <p >{
                       stat.map((x,index)=>(
                            <p className={style["p-oscuras"]} key={index}>{x.base}</p>
                        ))

                    }</p>
                    
                </div>        
            </div>


        </div>
        
    );

}
export default Text;