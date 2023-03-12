import PanelEjes from '../_componentes/PanelEjes';

async function getEjes() {
  const res = await fetch('https://mercave-2301.azurewebsites.net/vehiculos/ejes');
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const ejes = await getEjes();
  return (
      <PanelEjes ejes = {ejes}/>
  )
}
