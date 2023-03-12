export default {
  title: "Ficha Técnica Eje A.V.",
  name: "FTEAVM",
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
  ],
  preview:{
    select: {
      title: 'descripcion',
      subtitle:'codigo',
      media:'imagen'
    }
  }
} 