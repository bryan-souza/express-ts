import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { Controller } from "../interfaces/fib.interface";

class FibonacciController implements Controller {
  fibStart: Array<number>;

  constructor () {
    this.fibStart = [0, 1];
  }

  
  get(req: Request, res: Response): void {
    const level = parseInt(req.params.level);

    let sequence = new Array<number>();
    for (let i = 1; i <= level; i++) {
      if (i <= this.fibStart.length) {
        sequence.push(this.fibStart[i - 1]);
        continue;
      }

      const element = sequence[sequence.length - 2] + sequence[sequence.length - 1];
      sequence.push(element);
    }

    res.status(200).json({
      level: level,
      sequence: sequence
    });
  }

  post(req: Request, res: Response): void {
    res.status(500).json({
      detail: 'Not implemented'
    });
  }

  put(req: Request, res: Response): void {
    res.status(500).json({
      detail: 'Not implemented'
    });
  }

  delete(req: Request, res: Response): void {
    res.status(500).json({
      detail: 'Not implemented'
    });
  }
}

export { FibonacciController };