import User from '../models/User';
//import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';


class Authenticate {
  async execute({ email, password }){
    const user = await User.findOne({where : {email: email}});

    if (!user){
      throw new Error('Email/Senha incorreto');
    }

    //user.password - Senha criptografada
    //password - senha não criptografada
    //Utilizar bcryptjs para criptografar

    //const passwordIgual = await compare(password, user.senha); //Retorna true se é igual

    if (password === user.senha){
      const token = sign(
        {},       //Payload - Permissões do usuário
        authConfig.jwt.secret, //Chave Secreta
        { //Configurações do Token
          subject: user.id.toString(), //ID do usuário - A quem pertence o Token
          expiresIn: authConfig.jwt.expiresIn, //Quando expira - Pesquisar Refresh Token
        }
      );

      return {user, token};
    } else {
      throw new Error('Email/Senha incorreto');
    }
  }
}

export default Authenticate;
