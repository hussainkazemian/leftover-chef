import { Router } from 'express';
import { getUserActivities } from '../controllers/activityController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/activities', authMiddleware, getUserActivities);

export default router;