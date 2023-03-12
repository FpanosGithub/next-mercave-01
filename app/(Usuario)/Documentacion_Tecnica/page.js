import { previewData } from "next/headers";
import PreviewSuspense from "./_componentes/PreviewSuspense";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import ListaDocs from './_componentes/ListaDocs'

const query = groq`
  *[_type=='FTEAVM'] {
      ...,
      }
`

export default async function Page() {
  if(previewData()){
    return (
      <PreviewSuspense fallback = {<div className="text-teal-500 text-center">Cargando datos de modo Preview</div>}>
        <listaDocsPreview query = {query}/>
      </PreviewSuspense>
  )}

  const EAVMs = await client. fetch(query);
  return (
  <>
  <h1> Lista de Documentos </h1>
  <br></br>
  <ListaDocs  docs = {EAVMs} />
  </>
  )
}