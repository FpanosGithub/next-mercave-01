'use client'
import {useState, useEffect} from "react"
import MapaCirculaciones from "@/ui/MapaCirculaciones"
import ListaCirculaciones from "@/ui/ListaCirculaciones"
import MapaCirculacion from "@/ui/MapaCirculacion"
import GraficasCirculacion from "./GraficasCirculacion"

export default function PanelCirculaciones ({circulaciones}) {
  const [select, setSelect] = useState(-1)
  const [hover, setHover] = useState(-1)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  if (select !== -1) {
    let circulacion = circulaciones[0]
    circulaciones.forEach((obj)=> {if (select === obj.id) {circulacion = obj}})
    return (
    <>
    <div className='text-lg text-gray-400 pt-6 pb-3'>Últimas Circulaciones del Eje</div>
    <div className="space-y-1 2xl:space-y-0 2xl:gap-1 2xl:grid 2xl:grid-cols-2 3xl:grid-cols-3">
      <MapaCirculacion
        circulacion = {circulacion}
        onSelect = {setSelect}/>
      <ListaCirculaciones
        circulaciones = {circulaciones} 
        select = {select}
        onSelect = {setSelect}
        hover = {hover}
        onHover = {setHover}/>
      <GraficasCirculacion
        circulacion = {circulacion}/>
   
    </div>
    </>
    )
  }

  return(
    <>
    {/* Título Ficha */}
    <div className='text-lg text-gray-400 pt-6 pb-3'>Últimas Circulaciones del Eje</div>
    <div className="grid gap-1 grid-cols-1 2xl:grid-cols-2">
    
      <MapaCirculaciones
        circulaciones = {circulaciones} 
        select = {select}
        onSelect = {setSelect}
        hover = {hover}
        onHover = {setHover}/> 

      <ListaCirculaciones
        circulaciones = {circulaciones} 
        select = {select}
        onSelect = {setSelect}
        hover = {hover}
        onHover = {setHover}/>

    </div>
    </>
  )  
}
