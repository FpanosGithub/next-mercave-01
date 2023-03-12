'use client'
import Image from "next/image"
import urlFor from '@/lib/urlFor'

export default function ListaDocs({docs}){
  if(docs.length>0){
    return (
      <div>
        {docs.map((doc) => (
          <div key = {doc.codigo}>
            <h1> {doc.descripcion} - {doc.codigo} </h1>
            <Image 
              className="object-cover object-left width-auto"
              src = {urlFor(doc.imagen).url()}
              alt= 'vehiculo'
              width = {200}
              height = {200}
              />
          </div>
          ))
        }
      </div>
    )
  }
}