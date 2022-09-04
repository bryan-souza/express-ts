import { Request, Response } from "express";

const fibStart = [0, 1];

// Basic controller
function getFibSequence(req: Request, res: Response) {
  const level = parseInt(req.params.level);
  
  let sequence = new Array<number>();
  for (let i = 1; i <= level; i++) {
    if (i <= fibStart.length) {
      sequence.push(fibStart[i - 1]);
      continue;
    }

    const element = sequence[sequence.length - 2] + sequence[sequence.length - 1];
    sequence.push(element);
  }

  res.json({
    level: level,
    sequence: sequence
  });
}

export { getFibSequence };