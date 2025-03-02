import { Request, Response } from "express";

export const getHello = (req: Request, res: Response) => {
  res.json({ message: "Hello from the controller 2!" });
};

export const getTest = (req: Request, res: Response) => {
  res.json({ message: "Hello from Test 2!" });
};
