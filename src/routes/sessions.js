import { Router } from 'express';
import Authenticate from '../services/Authenticate';

const sessionsRouter = Router();

sessionsRouter.post('/', async(request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new Authenticate();
    //Passa o email e senha e aguarda a resposta da autenticação
    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password; //Remover a senha para retornar o usuário sem senha
    delete user.dataValues.password;
    if(user){
      return response.json({ user, token });
    }
    return response.status(400).json({ error: 'Usuário não encontrado' });

  } catch(err) {
    return response.status(400).json({ error: 'Usuário não encontrado' });
  }
});

export default sessionsRouter;
