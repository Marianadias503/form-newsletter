import {User} from '../types/User';

type Error = {
    [key:string]: string;

}; 

export const validate = (data:User) =>{ //recebe como parâmetro o User e faz a validação de erros

    const erros: Error ={};

    if(!data.name){
        erros["name"] = 'O nome é obrigatório';
    }
    if(!data.email){
        erros["email"] = 'O email é obrigatório';
    }
    if(!data.agree){
        erros["agree"] = 'Você precisa concordar com os termos';
    }
   return erros;
};