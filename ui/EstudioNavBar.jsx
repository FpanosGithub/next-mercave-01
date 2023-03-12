import Link from "next/link";
import Image from "next/image";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import tria from '@/public/logos/tria.png'

export default function EstudioNavBar(props){
  return (
    <div className='bg-black'>
      <div className='mb-2 flex justify-between px-2'>
        <Link href = '/' className="flex items-center text-lg px-2 py-2">
          <ArrowUturnLeftIcon className = 'h-6 w-6 mr-2'/>
          Volver
        </Link>
        <div className="text-xl text-slate-400">Estudio</div>
        <Image src={tria} width = {140} height={60} alt='logo Tria' className="h-10 w-auto"/>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}