import {User} from '../types/User'
import { useState, FormEvent } from 'react'
import { validate } from '../utils/validate';


const Form = () =>{

    //usando o UseState para armazenar os dados inseridos no formulário
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [agree, setAgree] = useState(false);
     const [erros,setErros] = useState<User | null>(null);
    
     //handleSubmit é a função que lida com o envio do formulário
     const handleSubmit = (e: FormEvent) =>{ //tipei o 'e' pois se não tipar, seria retornado um 'any'
        e.preventDefault(); //evita que a página seja recarregada ao acontecer o envio do formulário
        setErros(null); //limpa os erros antes da página ser atualizada
    
        const data:User = {
            name,email,agree
        };
     const validateErros = validate(data); //chama a função de validação e armazena os erros se tiver
     
     if(Object.keys(validateErros).length > 0){ //verifica se tem algum erro 
       setErros(validateErros) // se ouver erros, chama a função setErros e armazena eles no validateErros
     }
     //zerando o campo de digitação após o envio de um formulário
     setName("");
     setEmail("");
     setAgree(false);
 
     }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name">Nome</label>                                                                                                                  
                <input type="text" placeholder="Digite seu nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" 
                value={name} onChange={(e)=> setName(e.target.value)}> {/*atualiza o valor do campo como valor passado pelo usuário*/}

                </input>
            </div>
            {/*passa uma mensagem de erro caso o 'nome' tenha algum */}
            {erros?.name && <small className='text-xs text-red-500 mt-1'>{erros?.name}</small>}

            <div  className="flex flex-col">
                <label  className="text-sm" htmlFor="email">Email</label>
                <input type="email" placeholder="Insira seu melhor e-mail"  className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            {erros?.email && <small className='text-xs text-red-500 mt-1'>{erros?.email}</small>}
            <div>
                <a href="#" className="text-xs underline mb-2">Leia os termos</a>
                <div  className="flex gap-2 items-center">
                    <input type="checkbox" checked={agree} onChange={(e)=> setAgree(e.target.checked)}/>
                    <label  className="text-sm"  htmlFor="agree">Concordo com os termos</label>
                  
                </div>
                {erros?.agree && <small className='text-xs text-red-500 mt-1'>{erros?.agree}</small>}
            </div>
           <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</button>
        </form>
    )
}
export default Form