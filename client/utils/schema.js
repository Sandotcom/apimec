import * as yup from 'yup';

export const schema = yup.object().shape({
  cuit: yup.number().nullable(), // agregar validacion 11 caracteres
  direccion: yup.string().nullable(),
  altura: yup.number().nullable(),
  rubro: yup.string().nullable(),
  barrio: yup.string().nullable(),
  comuna: yup.string().nullable()
})