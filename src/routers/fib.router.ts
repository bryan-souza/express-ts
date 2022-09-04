import { Router } from 'express';
import { getFibSequence } from '../controllers/fib.controller';

const fibRouter = Router();

// Route using req.params
fibRouter.get('/:level', getFibSequence);

export default fibRouter;