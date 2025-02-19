import { Comment, Like } from '../models/commentModel';

const addComment = async (userId, commentData) => {
  const comment = await Comment.create({ userId, ...commentData });
  return comment;
};

const likeComment = async (userId, commentId) => {
  const like = await Like.create({ userId, commentId });
  return like;
};

const unlikeComment = async (userId, commentId) => {
  const like = await Like.findOne({ where: { userId, commentId } });

  if (!like) {
    throw new Error('Like not found');
  }

  await like.destroy();
  return like;
};

export default { addComment, likeComment, unlikeComment };