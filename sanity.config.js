import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {projectId, dataset} from '@/lib/sanity.client'
import EstudioNavBar from '@/ui/EstudioNavBar'

export default defineConfig({
  basePath: "/Estudio",
  name: 'Estudio',
  title: 'Gestor de Documentación',
  projectId: projectId,
  dataset: dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      //logo: Logo,
      navbar: EstudioNavBar
    }
  },
})
