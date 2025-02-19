import { Request, Response } from 'express';
import userService from '../services/userService';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const token = await userService.login(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const profile = await userService.getProfile(req.user.id);
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};