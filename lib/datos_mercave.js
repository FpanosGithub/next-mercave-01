export const urls_mercave = {
  // ******* SERVIDOR ****************
  servidor_backend: 'http://localhost:8000/',
  //servidor_backend: 'https://mercave-2301.azurewebsites.net/',
  // *********************************
  // vehiculos
  vehiculos: 'api/vehiculos',
  circulaciones_vehiculo : 'api/circulaciones_vehiculo',
  eventos_circulacion_vehiculo : 'api/eventos_circulacion_vehiculo',
  mantenimientos_vehiculo : 'api/mantenimientos_vehiculo',
  // ejes EAVM
  ejes: 'api/ejes',
  circulaciones_eje : 'api/circulaciones_eje',
  eventos_circulacion_eje : 'api/eventos_circulacion_eje',
  cambios_eje : 'api/cambios_eje',
  mantenimientos_eje : 'api/mantenimientos_eje',
  // cambiadores CAVM
  operaciones_de_cambio: 'api/operaciones_de_cambio',
  cambios_operacion: 'api/cambios_operacion',
  // actores
  actores : 'api/actores',
  operadores : 'organizaciones/operadores',
  keepers : 'organizaciones/keepers',
  fabricantes : 'organizaciones/fabricantes',
  mantenedores : 'organizaciones/mantenedores',
  // alarmas
  alarmas : 'api/alarmas',
  // alarmas
  noticias : 'api/noticias',
}



export const objeto_cambio = {
  id:0,
  eje:'',
  operacion: {id:0, cambiador:{lat:0, lng:0}},
  num_cambio_eje:0,
  alarma:false,
  inicio:'',
  V: 0,
  FV: 0,
  tdaM: 0,
  fdaM: 0,
  ddaM: 0,
  tcaM: 0,
  fcaM: 0,
  dcaM: 0,
  team: 0,
  feam: 0,
  deam: 0,
  tdbM: 0,
  fdbM: 0,
  ddbM: 0,
  tcbM: 0,
  fcbM: 0,
  dcbM: 0,
  tebm: 0,
  febm: 0,
  debm: 0,
  cambiador: 0
}
