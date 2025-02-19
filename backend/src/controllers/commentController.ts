import { Request, Response } from 'express';
import commentService from '../services/commentService';

export const addComment = async (req: Request, res: Response) => {
  try {
    const comment = await commentService.addComment(req.user.id, req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const likeComment = async (req: Request, res: Response) => {
  try {
    const like = await commentService.likeComment(req.user.id, req.params.id);
    res.status(200).json(like);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const unlikeComment = async (req: Request, res: Response) => {
  try {
    const unlike = await commentService.unlikeComment(req.user.id, req.params.id);
    res.status(200).json(unlike);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};