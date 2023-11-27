import { SchemaModel, StringType } from "schema-typed";



export const loginModel = SchemaModel({
  email: StringType()
    .isEmail("Por favor, introduce una dirección de correo electrónico válida.")
    .isRequired("Este campo es obligatorio."),
  password: StringType().isRequired("Este campo es obligatorio.").minLength(6, "Se requieren mínimo 6 caracteres")
});

const addModel = SchemaModel({
  firstname: StringType()
    .isRequired("Este campo es obligatorio.")
    .minLength(2, "Se requieren mínimo 2 caracteres"),
  lastname: StringType().isRequired("Este campo es obligatorio."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      if (value !== data.password) return false;

      return true;
    }, "Las contraseñas no coinciden")
    .isRequired("Este campo es obligatorio.")
});

export const registerModel = SchemaModel.combine(loginModel,addModel)
