import PanelFlota from '../_componentes/PanelFlota';

async function getVehiculos() {
  const res = await fetch('https://mercave-2301.azurewebsites.net/vehiculos/locomotoras');
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const vehiculos = await getVehiculos();
  return (
    <>
      <PanelFlota vehiculos = {vehiculos}/>
    </>
  )
}
