import User from '../models/User';
//import { compare } from 'bcryptjs'

class Authenticate {
  async execute({ email, password }){
    const user = await User.findOne({where : {email: email, senha: password}})

    if (!user){
      throw new Error('Email/Senha incorreto');
    }

    //user.password - Senha criptografada
    //password - senha não criptografada
    //Utilizar bcryptjs para criptografar

    //const passwordIgual = await compare(password, user.senha); //Retorna true se é igual

    //Se chegou até aqui Usuário autenticado

    return {
      user
    }


  }
}

export default Authenticate;
