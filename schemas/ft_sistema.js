export default {
  title: "Ficha Técnica Sistema",
  name: "FTSistema",
  type: "document",
  fields: [
    {
      title: "Código",
      name: "codigo",
      type: "string",
    },
    {
      title: "Descripción",
      name: "descripcion",
      type: "string",
    },
    {
      title: 'Imagen',
      name: 'imagen',
      type: 'image'
    },
    {
      title: 'SLUG',
      name: 'slug',
      type: 'slug',
      options: {
          source: 'codigo',
          maxLength: 200, // will be ignored if slugify is set
        }
    },
    {
      title: 'Conjuntos',
      name: 'conjuntos',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'FTConjunto'}]}]
    },
  ],
  preview:{
    select: {
      title: 'descripcion',
      codigo:'codigo',
    },
    prepare(selection) {
      const {title, codigo} = selection
      return {
        title: title,
        subtitle: `Código: ${codigo ? codigo : 'sin definir'}`
      }
    }
  }
} 