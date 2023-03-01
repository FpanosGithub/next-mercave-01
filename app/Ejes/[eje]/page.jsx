import { Suspense } from "react";
import FichaEje from '../_componentes/FichaEje';
import CirculacionesEje from '../_componentes/CirculacionesEje';

async function getEje(id) {
  const res = await fetch(`https://mercave-2301.azurewebsites.net/vehiculos/ejes/${id}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data for eje: ${id}`);
  }
  return res.json();
}

// Generación estática de páginas 
async function getEjes() {
  const res = await fetch('https://mercave-2301.azurewebsites.net/vehiculos/ejes')
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data for ejes');
  }
  return res.json();
}
export async function generateStaticParams() {
  const ejes = await getEjes();
  return ejes.map((eje) => ({
    eje: `${eje.id}`,
  }));
}

export default async function Page({params}) {
  const eje = await getEje(params.eje);
  console.log(eje)
  return (
    <>
    <FichaEje eje = {eje}/>
    {/* 
    <Suspense fallback = {<p>cargando últimas 5 circulaciones del eje: {eje.id}...........</p>}>
      <CirculacionesEje id_eje = {eje.id}/>
    </Suspense>
    */}
    </>
  )
}