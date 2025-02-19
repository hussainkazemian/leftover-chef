import { Router } from 'express';
import { addComment, likeComment, unlikeComment } from '../controllers/commentController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/comments', authMiddleware, addComment);
router.post('/comments/:id/like', authMiddleware, likeComment);
router.post('/comments/:id/unlike', authMiddleware, unlikeComment);

export default router;