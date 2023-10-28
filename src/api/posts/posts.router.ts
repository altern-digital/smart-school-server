import { Router } from 'express';
import * as postController from './post.controller';

const router = Router();

router.get('/', postController.getPosts);
router.get('/:postId', postController.getPost);
router.post('/', postController.createPost);
router.delete('/:postId', postController.deletePost);

export default router;