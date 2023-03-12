import PanelCambios from "./PanelCambios";

async function getCambios(id) {
  const res = await fetch(`https://mercave-2301.azurewebsites.net/eventos/cambios_eje/${id}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('No pudimos recoger datos de Cambios del Eje');
  }
  return res.json();
}


export default async function CambiosEje ({id_eje}){
  const cambios = await getCambios(id_eje);
  console.log(cambios)
  return(
    <PanelCambios cambios = {cambios}/>
  )
}
