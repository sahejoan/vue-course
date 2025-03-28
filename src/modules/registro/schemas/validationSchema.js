import * as yup from 'yup';

const validationSchema = yup.object().shape({
  nombre: yup
    .string()
    .required('Name is required')
    .min(3, ' El nombre debe tener minimo 3 caracteres'),
  correo: yup
    .string()
    .email(' Formato de correo incorrecto')
    .required('Email is required'),
});

export default validationSchema;
