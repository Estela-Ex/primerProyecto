import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const BasicFormSchemaRegistro = yup.object().shape({
  firstname: yup.string("Please enter a valid firstname").required("Required"),
  lastname: yup.string("Please enter a valid lastname").required("Required"),
  address: yup.string("Please enter a valid addres").required("Required"),
  city: yup.string("Please enter a valid city").required("Required"),
  postalCode: yup
    .number("Please enter a valid postalCode")
    .required("Required"),
  email: yup
    .string("Debe de ser un string")
    .email("Please enter a valid email")
    .required("Required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Must contain a minimun of 5 characters, 1 uppercase, 1 lowercase and a number",
    })
    .required("Required"),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match")
    .required("Required"),
});
