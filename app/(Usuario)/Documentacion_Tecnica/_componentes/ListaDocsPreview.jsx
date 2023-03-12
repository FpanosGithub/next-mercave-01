'use client'
import Image from "next/image"
import {usePreview} from '@/lib/sanity.preview'
import ListaDocs from './_componentes/ListaDocs'

export default function ListaDocsPreview({query}){
  const docs = usePreview(null, query)
  return (
      <ListaDocs docs = {docs}/>
    )
}