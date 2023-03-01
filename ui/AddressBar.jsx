'use client'
import { usePathname } from 'next/navigation';

export function AddressBar(){
  const pathnames = usePathname().slice(1).split('/')
  return(
  <div className="flex items-center justify-between gap-x-2 p-3.5 lg:px-5 lg:py-2">
    <div className = 'flex'>
    {pathnames[0]?
      <span className="px-1.5 text-gray-400">{pathnames[0]}</span>
    : <span className="px-1.5 text-gray-400">Mercave</span>
    }
    </div>
    <button className=" text-gray-400 ">
      Log in
    </button>
  
  </div> 
)
}