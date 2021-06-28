import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

export default function verifyAuth(request, response, next){
  //Validação do Token JWT

  const authHedaer = request.headers.authorization;

  if(!authHedaer){
    response.status(401);

    return response.send({message:'Token JWT não existe.'});
  }

  //Bearer Hash
  const [tipoToken, token] = authHedaer.split(' ');

  try {
    const tokenDecodificado = verify(token, authConfig.jwt.secret);
    //Aqui retorna: iat  exp  sub

    const { sub } = tokenDecodificado; //Sub = Subject está o ID do usuário que foi passado no Authenticate

    const user = {
      id: sub
    };

    //Mega importante: isso faz com que todas as rotas autenticadas tenha esse ID e com isso posso acessar o ID do usuário
    //ou outra coisa direto do request
    request.user = {
      id: sub,
    }

    return next();
  } catch (err){
      response.status(401);

      response.send({message:'Token JWT Invalido'});
  }
}
