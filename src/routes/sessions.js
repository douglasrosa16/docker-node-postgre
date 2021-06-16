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
    console.log(user.dataValues);
    delete user.senha; //Remover a senha para retornar o usuário sem senha

    return response.json({ user, token });

  } catch(err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
