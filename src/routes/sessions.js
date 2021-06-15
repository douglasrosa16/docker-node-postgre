import { Router } from 'express';
import Authenticate from '../services/Authenticate';

const sessionsRouter = Router();

sessionsRouter.post('/', async(request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new Authenticate();
    //Passa o email e senha e aguarda a resposta da autenticação
    const { token } = await authenticateUser.execute({
      email,
      password,
    });
    console.log(token);

    return response.json({ token });

  } catch(err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
