import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const BasicFormSchemaLogin = yup.object().shape({
  email: yup
    .string("Debe de ser un string")
    .email("Por favor introduzca un email valido")
    .required("Requerido"),
    password: yup
    .string()
    .matches(passwordRules, {
    message:
    "Debe contener un minimo de 5 caracteres, 1 mayuscula, 1 minuscula y 1 numero",
        })
    .required("Requerido"),
   
});
