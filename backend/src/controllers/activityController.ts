import { Request, Response } from 'express';

export const getUserActivities = async (req: Request, res: Response) => {
  try {
    const activities = await activityService.getUserActivities(req.user.id);
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};