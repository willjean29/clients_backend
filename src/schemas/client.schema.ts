import { object, ref, string } from "yup";

const clientSchema = object({
  body: object({
    name: string()
      .required("El nombre es obligatorio")
      .max(15, "El nombre debe tener 15 caracteres como máximo"),
    lastName: string()
      .required("El apellido es obligatorio")
      .max(20, "El apellido debe tener 20 caracteres como máximo"),
    dateOfBirth: string().required("La fecha de nacimiento es obligatoria"),
  }),
});

export default {
  clientSchema,
};
