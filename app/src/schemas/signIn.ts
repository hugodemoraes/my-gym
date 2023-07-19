import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup.string().required("Informe o e-mail."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "A senha deve conter pelo menos 6 dígitos."),
});
