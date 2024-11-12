import { User } from "../types/User";

export const validate = (data: User) => {
    // Função de validação que retorna um objeto com os erros
    const errors: Record<string, string> = {};
  
    if (!data.name) {
      errors.name = "Nome é obrigatório";
    }
    if (!data.email) {
      errors.email = "Email é obrigatório";
    }
    // Mais validações, conforme necessário
  
    return errors;
  };
  