import { useForm } from 'react-hook-form';
import { User } from '../types/User';
import { validate } from '../utils/validate';


const Form = () => {
  // Usando useForm para gerenciar o estado do formulário e validações
  const { register, handleSubmit, formState: { errors } } = useForm<User>(); // o user usado aqui, indica que os dados enviados no form vão ser o 'USER' e vai ser usado na validação

  const onSubmit = (data: User) => { //o data será o 'USER', ou seja, os daddos digitados no form
    const validateErros = validate(data); // Chama a função de validação e armazena os erros, se houver

    if (Object.keys(validateErros).length > 0) {
      // Verifica se o objeto validateErros, possui alguma chave (algum erro)
      console.log(validateErros);
    }

//handleSubmit: vem direto do react-hook-form e é usando para fazer a validação dos campos do formulario
}

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      {/* Campo Nome */}
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          {...register("name", { required: "Nome é obrigatório" })} // Registrar o campo com validação
        />
      </div>
      {errors.name && <small className='text-xs text-red-500 mt-1'>{errors.name.message}</small>} {/* Exibe a mensagem de erro se houver */}

      {/* Campo E-mail */}
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Insira seu melhor e-mail"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          {...register("email", {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "E-mail inválido",
            },
          })}
        />
      </div>
      {errors.email && <small className='text-xs text-red-500 mt-1'>{errors.email.message}</small>} {/* Exibe a mensagem de erro se houver */}

      {/* Campo de concordância com os termos */}
      <div>
        <a href="#" className="text-xs underline mb-2">Leia os termos</a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            {...register("agree", { required: "Você precisa concordar com os termos" })}
          />
          <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
        </div>
        {errors.agree && <small className='text-xs text-red-500 mt-1'>{errors.agree.message}</small>} {/* Exibe a mensagem de erro se houver */}
      </div>

      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</button>
    </form>
  );
};

export default Form; 