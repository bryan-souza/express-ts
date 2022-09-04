import { Router, Request, Response } from "express";

const indexRouter = Router();

// Basic routing
indexRouter.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the index page!');
})

export default indexRouter;