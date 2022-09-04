import { Router } from 'express';
import { FibonacciController } from '../controllers/fib.controller';

const fibRouter = Router();
const fibController = new FibonacciController();

// Route using req.params
fibRouter.get('/:level', fibController.get);

export default fibRouter;