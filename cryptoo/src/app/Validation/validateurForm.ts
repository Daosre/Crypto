import * as yup from "yup"

export const schema = yup
  .object({
    firstName: yup.string().required("Required field"),
    lastName: yup.string().required("Required field"),
    age: yup.number().positive("le nombre doit etre positive").min(18, "Older Than 18").required('You need to have more then 18 years old')
    .integer("le nombre doit etre un entier").required("ce champs est obligatoire").typeError("ce nest pas un nombre"),
    city: yup.string().required("Required field"),
    pseudo: yup.string().required("Required field"),
    email: yup.string().email("Email valid").required(),
    password: yup.string()
    .matches(/[a-z]/,"You need one letter")
    .matches(/[A-Z]/,"You need one capital letter ")
    .matches(/[1-9]/,"You need one number")
    .matches(/[@!?]/,"You need one special character")     
    .min(8, "Minimum 8 ").required("Required field")
    .required("Required field"),
  })
  