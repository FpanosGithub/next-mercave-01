import Link from 'next/link';
import Image from "next/image"
import {BoltIcon, BoltSlashIcon, WrenchIcon,  PauseIcon, PlayIcon, WifiIcon, RssIcon,  BellAlertIcon, XMarkIcon, CheckIcon, ViewfinderCircleIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';

export default function FichaVehiculo ({vehiculo}){

  return(
    <>
    {/* Div general */}
    <div className="grid grid-cols-2 gap-1 past-sm:grid-cols-3 past-md:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-8 4xl:grid-cols-9">
      
      {/* Div # 1 - Imagen + estado ocupa 2 cols */}
      <div className="flex justify-around align-middle col-span-2 rounded-md py-2 px-2 border border-slate-500 h-[12rem]">
          <Image src = {`/imagenes/vehiculos/${vehiculo.tipo.imagen}`} alt = 'imagen vehículo' height = {230} width = {360} className="rounded-lg h-auto"/>

      </div>
      
      {/* Div # 2 - Matrícula y Descripción*/}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[12rem]">
        <div className="rounded-md pt-2 px-1 h-16  text-lg font-extralight overflow-hidden text-center bg-slate-800 ">{vehiculo.matricula}</div>
        <div className="text-xs text-slate-300 mt-4">Tipo:</div>
        <div className="mt-2 p-1 h-16 overflow-hidden text-md font-light text-slate-400">{vehiculo.tipo.codigo}</div>
      </div>

      {/* Div # 3 - Descripción*/}
      <div className="rounded-md px-4 py-4 border border-slate-500 overflow-hidden h-[12rem] past-md:hidden 2xl:inline-block 2xl:col-span-2 3xl:hidden 4xl:inline-block 4xl:col-span-1">
        <div className="p-1 text-md font-light text-center text-slate-400">{vehiculo.descripcion}</div>
      </div>

      {/* Div # 4 - Owner y Keeper*/}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[12rem]">
          <div className="text-xs text-slate-300">Owner / Keeper:</div>
          <div className="rounded-md mt-2 p-1 h-16 text-md font-light  text-slate-400">{vehiculo.owner} / {vehiculo.keeper}</div>
          <div className="text-xs text-slate-300 mt-2">EEM:</div>
          <div className="mt-2 p-1 h-10 text-md font-light  text-slate-400">{vehiculo.EEM}</div>
      </div>

    {/* Div # 5 - Datos servicio*/}
    <div className="rounded-md px-4 py-4 border border-slate-500 h-[12rem]">
        <div className="text-xs text-slate-300">Servicio:</div>
        <div className = 'flex justify-around mt-2 p-1 rounded-full border border-slate-500'>
          {vehiculo.en_servicio?
              (<BoltIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<BoltSlashIcon className="w-6 h-6 mx-auto text-red-500"/>)}
        </div>
        <div className="mt-4 text-xs text-slate-300">Observaciones:</div>
        <div className="mt-2 py-1 h-16 overflow-hidden text-md font-light  text-slate-400">{vehiculo.observaciones_servicio}</div> 
    </div>

    {/* Div # 6 - datos Circulación*/}
    <div className="rounded-md px-4 py-4 border border-slate-500 h-[12rem]">
        <div className="text-xs text-slate-300">Circulación:</div>
        <div className = 'flex justify-evenly mt-2 p-1 rounded-full border border-slate-500'>
        {vehiculo.en_circulacion?
              (<PlayIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<PauseIcon className="w-6 h-6 mx-auto text-red-500"/>)}
        {vehiculo.alarma?
            (<BellAlertIcon className="w-6 h-6 mx-auto text-red-500"/>)
          : (<BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>)}
        {vehiculo.transmitiendo?
              (<RssIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<WifiIcon className="w-6 h-6 mx-auto text-red-500"/>)}
        </div>
        <div className="mt-4 text-xs text-slate-300">KM realizados:</div>
        <div className="mt-2 py-1 h-10 text-md font-light  text-slate-400 overflow-hidden">{Math.round(vehiculo.km_totales).toLocaleString('fr')} km</div>
        <div className="flex justify-between">
          <div className='text-xs  text-slate-300 pt-1'>Nudo ferroviario:</div>
          {vehiculo.en_nudo?
            (<CheckIcon className="mx-auto w-6 h-6 text-green-400"/>)
          : (<XMarkIcon className="mx-auto w-6 h-6 text-gray-400"/>)
          }
        </div>
    </div>

    {/* Div # 7 - datos Mantenimiento*/}
    <div className="rounded-md px-4 border border-slate-500 h-[12rem]">
      <div className = 'flex justify-between'>
        <div className="mt-4 text-xs text-slate-300">Mantenimiento:</div>
        <Link className="mt-2 flex justify-between text-lg font-extralight text-slate-400" href = '/Vehiculos'> 
          <ArrowTopRightOnSquareIcon className="w-6 h-5"/>
        </Link>
      </div>
      <div className = 'flex justify-evenly mt-2 p-1 rounded-full border border-slate-500'>
        {vehiculo.en_mantenimiento?
          (<WrenchIcon className="w-6 h-6 mx-auto text-green-500"/>)
        : (<WrenchIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
      </div>
      <div className="mt-2 text-xs text-slate-300">Último Mto:</div>
      <div className="py-1 h-10 overflow-hidden text-md font-light  text-slate-400 ">{vehiculo.fecha_ultimo_mantenimiento}</div> 
      <div className="text-xs text-slate-300">Próximo Mto:</div>
      <div className="py-1 h-10 overflow-hidden text-md font-light  text-red-700">{vehiculo.fecha_proximo_mantenimiento}</div> 
    </div>
    
    {/* Div # 8 - Ejes */}
    <div className="rounded-md px-4 py-4  border border-slate-500 h-[12rem] col-span-2 past-sm:col-span-1 past-md:col-span-1">
        <div className="text-xs text-slate-300 mb-2">Ejes:</div>
        <div className="rounded-m py-1 px-4 h-32 bg-slate-900 ">
          {vehiculo.ejes.map((eje)=>{return(
              <Link key={eje.id} className="mt-1 flex justify-between text-md font-light text-slate-400 overflow-hidden" href = '/Vehiculos'> 
                {eje.codigo} 
                <ArrowTopRightOnSquareIcon className="w-6 h-5 ml-4"/>
              </Link>
            )
            })}
        </div>
      </div>
  </div>
  </>
  )
}
