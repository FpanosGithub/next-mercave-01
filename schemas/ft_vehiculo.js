export default {
  title: "Ficha Técnica Vehiculo",
  name: "FTVehiculo",
  type: "document",
  fields: [
    {
    title: "Clase",
    name: "clase",
    type: "string",
    },
    {
      title: "Descripción",
      name: "descripcion",
      type: "string",
    },
    {
      title: "Tipo UIC",
      name: "tipo_uic",
      type: "string",
    },
    {
      title: "Serie UIC",
      name: "serie_uic",
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
          source: (doc)=> `${doc.tipo_uic}.${doc.serie_uic}`,
          maxLength: 200, // will be ignored if slugify is set
        }
    },
  ],
  preview:{
    select: {
      title: 'descripcion',
      subtitle:'clase',
      media:'imagen'
    }
  }
} 