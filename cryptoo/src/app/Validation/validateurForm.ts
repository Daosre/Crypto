import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export const schema = yup
  .object({
    firstName: yup.string().required("ce champs est obligatoire"),
    lastName: yup.string().required("ce champs est obligatoire"),
    age: yup.number().positive("le nombre doit etre positive").min(18, "minimum 18").required('Y faut avoir minimum 18 ans')
    .integer("le nombre doit etre un entier").required("ce champs est obligatoire").typeError("ce nest pas un nombre"),
    city: yup.string().required("ce champs est obligatoire"),
    pseudo: yup.string().required("ce champs est obligatoire"),
    email: yup.string().email("email valid").required(),
    password: yup.string()
    .matches(/[a-z]/,"il faut aumoins un miniscule")
    .matches(/[A-Z]/,"il faut aumoins un majuscule")
    .matches(/[1-9]/,"il faut aumoins un chiffre")
    .matches(/[@!?]/,"il faut aumoins un caractere special")     
    .min(8, "minimum 8 ").required("ce champs est obligatoire")
    .required("champs obligatoire"),
    // promoCode: yup.string()
  })
  